import { PrismaClient, userRole } from "../../../../generated/prisma";
import bcrypt from "bcrypt";
const Prisma = new PrismaClient();
const createAdmin = async (data: any) => {
  const hasPassword: string = await bcrypt.hash(data.password, 12);

  const userData = {
    email: data.admin.email,
    password: hasPassword,
    role: userRole.ADMIN,
  };
  const result = await Prisma.$transaction(async (transactionClint) => {
    await transactionClint.user.create({
      data: userData,
    });
    const createdAdminData = await transactionClint.admin.create({
      data: data.admin,
    });

    return createdAdminData;
  });
  return result;
};
export const userService = {
  createAdmin,
};
