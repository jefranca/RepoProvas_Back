import { Request, Response, NextFunction } from "express";
import { newExam } from "../interfaces/newExam";
import * as examService from "../services/examService";
import * as validations from "../validations/validations";

export async function postExam(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const newExam: newExam = req.body;
    await validations.validateNewExam(newExam);
    await examService.postExam(newExam);
    res.sendStatus(201);
  } catch (error) {
    if (error.name === "UrlAlreadyExist")
      return res.status(409).send(error.message);
    if (error.name === "ValidationError")
      return res.status(409).send(error.message);
    next(error);
  }
}

export async function getExam(req: Request, res: Response, next: NextFunction) {
  const idProfessor = Number(req.params.idProfessor);
  const idDiscipline = Number(req.params.idDiscipline);
  const url = req.url.split("/")[2];
  console.log(idProfessor);
  console.log(idDiscipline);
  console.log(url);

  try {
    const result = await examService.getExam({
      url,
      idDiscipline,
      idProfessor,
    });
    res.send(result);
  } catch (error) {
    if (error.name === "ExamsNotFound")
      return res.status(404).send(error.message);
    next(error);
  }
}
