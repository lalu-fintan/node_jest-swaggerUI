import { notFound, errorHandler } from "../middleware/errorHander";
import userRouter from "./userRouter";
import questionRouter from "./questionRouter";
import categoryRouter from "./categoryRouter";

export const mainRoutes = (app: any) => {
  app.use("/api/user", userRouter);
  app.use("/api/question", questionRouter);
  app.use("/api/category", categoryRouter);
};
