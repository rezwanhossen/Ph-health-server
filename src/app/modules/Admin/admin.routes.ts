import express from "express";
import { adminController } from "./admmin.controller";
const router = express.Router();
router.get("/", adminController.getAllAdmin);
export const AdminRouter = router;
