const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

export const mainConfig = (app: any) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(cors());
};
