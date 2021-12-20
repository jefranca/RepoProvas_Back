import { Request, Response, NextFunction } from "express";

export default async function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(error);
  res.sendStatus(500);
}
