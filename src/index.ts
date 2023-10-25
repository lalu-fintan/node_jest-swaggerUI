import express, { Express } from "express";
import dotenv from "dotenv";
import { mainConfig } from "./config/mainConfig";
import { mainRoutes } from "./routes/mainRouter";
import { connectDB } from "./config/dbConfig";
dotenv.config();

const app: Express = express();

connectDB();
mainConfig(app);
mainRoutes(app);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

export default app;
