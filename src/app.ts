import "./setup";

import express, {Request,Response} from "express";
import cors from "cors";
import "reflect-metadata";
import connectDatabase from "./database";

import * as disciplineController from "./controllers/disciplineControllers"
import * as professorController from "./controllers/professorControllers"
import * as examController from "./controllers/examControllers"
import errorHandler from "./middlewares/errorHandler";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => res.sendStatus(200));
app.get("/disciplines", disciplineController.getDisciplines);
app.get("/professors/:idDiscipline", professorController.getProfessors);
app.post("/exams", examController.postExam)
app.use(errorHandler);

export async function init() {
  await connectDatabase();
}

export default app;
