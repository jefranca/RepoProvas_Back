import { Request, Response, NextFunction } from "express";
import * as disciplineService from "../services/disciplineService";

export async function getDisciplines(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const result = await disciplineService.getDisciplines();
    res.send(result);
  } catch (error) {
    if (error.name === "NoDisciplineFound")
      return res.status(404).send(error.message);
    next(error);
  }
}
