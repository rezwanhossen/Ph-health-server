import { Prisma, PrismaClient } from "../../../../generated/prisma";
const prisma = new PrismaClient();
const getAllAdmin = async (params: any) => {
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
  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };
  const result = await prisma.admin.findMany({
    where: whereCondition,
  });
  return result;
};
export const adminService = {
  getAllAdmin,
};
