import { PrismaClient } from "../../../../generated/prisma";
const prisma = new PrismaClient();
const getAllAdmin = async (params: any) => {
  const result = await prisma.admin.findMany({
    where: {
      name: {
        contains: params.name,
        mode: "insensitive",
      },
    },
  });
  return result;
};
export const adminService = {
  getAllAdmin,
};
