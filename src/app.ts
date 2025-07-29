import express, {
  Application,
  Request,
  Response,
  request,
  urlencoded,
} from "express";
import cors from "cors";
import { userController } from "./app/modules/User/user.controller";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.get("/", (req: Request, res: Response) => {
  res.send({
    Message: "ph health server.....",
  });
});

app.use("/api/v1/user", userController.createAdmin);

export default app;
