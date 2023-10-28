import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { mainConfig } from "./config/mainConfig";
import { mainRoutes } from "./routes/mainRouter";
import { connectDB } from "./config/dbConfig";
dotenv.config();

const app: Express = express();

connectDB();
mainConfig(app);
mainRoutes(app);
console.log("new");

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello, Docker with Node.js and MongoDB in TypeScript! ..");
});

app.listen(port, () => {
  console.log(`server running on ${port}`);
});

export default app;
