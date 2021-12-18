import "./setup";

import express, {Request,Response} from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => res.sendStatus(200));

export async function init() {
  await connectDatabase();
}

export default app;
