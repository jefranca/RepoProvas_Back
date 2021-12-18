import { getRepository } from "typeorm";
import DisciplineEntity from "../entities/DisciplinesEntity";
import DisciplineNotFound from "../errors/DisciplineNotFound";

export async function getDisciplines(): Promise<DisciplineEntity[]>{
  const disciplines = await getRepository(DisciplineEntity).find();
  if (!disciplines.length) throw new DisciplineNotFound("Discipline Not Found");
  return disciplines;
}
