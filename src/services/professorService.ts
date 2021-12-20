import { getRepository } from "typeorm";
import ProfessorEntity from "../entities/ProfessorsEntity";
import ProfessorNotFound from "../errors/ProfessorNotFound";

export async function getProfessors(
  idDiscipline: number
): Promise<ProfessorEntity[]> {
  const professors = await getRepository(ProfessorEntity).find({
    where: { discipline_id: idDiscipline },
  });
  if (!professors.length) throw new ProfessorNotFound("Professor Not Found");
  return professors;
}

export async function getAllProfessors(): Promise<ProfessorEntity[]> {
  const professors = await getRepository(ProfessorEntity).find();
  if (!professors.length) throw new ProfessorNotFound("Professor Not Found");
  return professors;
}
