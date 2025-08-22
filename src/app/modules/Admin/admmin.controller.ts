import { Request, Response } from "express";
import { adminService } from "./admin.service";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const result = await adminService.getAllAdmin(req.query);
    res.status(200).send({
      succes: true,
      message: "all admin find succesfully ",
      data: result,
    });
  } catch (err) {
    res.status(500).send({
      succes: false,
      message: "all admin find ",
      data: err,
    });
  }
};
export const adminController = {
  getAllAdmin,
};
