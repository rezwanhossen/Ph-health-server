import { Prisma } from "../../../../generated/prisma";
import { paginationHelpar } from "../../../helpars/paginationHelpar";
import prisma from "../../../shared/prisma";
const getAllAdmin = async (params: any, options: any) => {
  const { search, ...filterData } = params;
  const { limit, page, skip } = paginationHelpar.calculatepagenation(options);
  const andCondition: Prisma.AdminWhereInput[] = [];
  if (params.search) {
    andCondition.push({
      OR: ["name", "email"].map((field) => ({
        [field]: {
          contains: params.search,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andCondition.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: filterData[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };
  const result = await prisma.admin.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });
  return result;
};
export const adminService = {
  getAllAdmin,
};
