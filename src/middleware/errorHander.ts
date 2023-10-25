import { Request, Response, NextFunction } from "express";

//not found
export const notFound = (req: Request, res: Response, next: NextFunction) => {
  const error = new Error(`not found:${req.originalUrl}`);
  res.status(404);
  next(error);
};

//Error Handler

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statuscode = res.statusCode == 200 ? 500 : res.statusCode;
  res.status(statuscode);
  res.json({
    status: "fail",
    message: err?.message,
    stack: err?.stack,
  });
};
