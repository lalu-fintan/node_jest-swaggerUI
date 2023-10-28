import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

export const mainConfig = (app: any) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
};
