import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  const result = await userService.createAdmin(req.body);
  res.status(200).send({
    success: true,
    message: "tttt",
    restlt: result,
  });
};

export const userController = {
  createAdmin,
};
