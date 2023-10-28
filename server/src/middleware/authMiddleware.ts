import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

declare module "express-serve-static-core" {
  export interface Request {
    user: any;
  }
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tokens: any = req.headers.authorization?.split(" ")[1];

  try {
    if (!tokens) {
      res.status(401).json("you don't have a token");
    } else {
      let decoded: any = jwt.verify(tokens, process.env.SECRET_TOKEN || "");
      req.user = decoded;

      next();
    }
  } catch (err) {
    res.status(401).json("you are not authrized person");
  }
};

export const isSuperAdmin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token: any = req.headers.authorization?.split(" ")[1];

  try {
    if (!token) {
      res.status(401).json("you don't have token");
    } else {
      const decoded = jwt.verify(token, process.env.SECRET_TOKEN || "") as {
        user: { role: string };
      };

      if (decoded && decoded.user.role === "superAdmin") {
        next();
      }
    }
  } catch (error) {
    res.status(401).json("you don't have token");
  }
};
