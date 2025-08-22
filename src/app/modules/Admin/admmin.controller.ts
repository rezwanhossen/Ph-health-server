import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, [
      "name",
      "email",
      "search",
      "contactNumber",
    ]);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await adminService.getAllAdmin(filters, options);
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
