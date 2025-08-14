import { Request, Response } from "express";
import { userService } from "./user.service";

const createAdmin = async (req: Request, res: Response) => {
  try {
    const result = await userService.createAdmin(req.body);
    res.status(200).send({
      success: true,
      message: "create admin successifuly!",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      success: true,
      message: "admin not created somthing with worng!",
      data: err,
    });
  }
};

export const userController = {
  createAdmin,
};
