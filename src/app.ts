import "./setup";

import express, {Request,Response} from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import * as disciplineController from "./controllers/disciplineControllers"

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => res.sendStatus(200));
app.get("/disciplines", disciplineController.getDisciplines)

export async function init() {
  await connectDatabase();
}

export default app;
