import { Request, Response, NextFunction } from "express";
import { newExam } from "../interfaces/newExam";
import * as examService from '../services/examService'
import * as validations from '../validations/validations'

export async function postExam(
  req: Request,
  res: Response,
  next: NextFunction
) {
    try {
        const newExam:newExam = req.body;
        await validations.validateNewExam(newExam);
        await examService.postExam(newExam)
        res.sendStatus(201)
    } catch (error) {
        if (error.name === 'UrlAlreadyExist') return res.status(409).send(error.message);
        if (error.name === 'ValidationError') return res.status(409).send(error.message);
        next(error);
    }
}
