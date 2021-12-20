import { getRepository } from "typeorm";
import DisciplineEntity from "../entities/DisciplinesEntity";
import ExamEntity from "../entities/ExamsEntity";
import ProfessorEntity from "../entities/ProfessorsEntity";
import ExamsNotFound from "../errors/ExamsNotFound";
import UrlAlreadyExist from "../errors/UrlAlreadyExist";
import { newExam } from "../interfaces/newExam";

export async function postExam(newExam: newExam) {
  const examsRepository = await getRepository(ExamEntity);
  const isUrlValid = await examsRepository.find({
    where: { url: newExam.url },
  });
  if (isUrlValid.length) throw new UrlAlreadyExist("This url already exist");
  await examsRepository.save(newExam);
}

interface getExam {
  url: string;
  idDiscipline: number;
  idProfessor: number;
}

export async function getExam({ url, idDiscipline, idProfessor }: getExam) {
  let exams = [];
  if (url === "professor") {
    exams = await getRepository(ExamEntity).find({
      where: { professor_id: idProfessor },
      relations: ["professors"],
    });
  } else {
    exams = await getRepository(ProfessorEntity).find({
      relations: ["disciplines"],
      where: { disciplines: { id: idDiscipline } },
    });
  }

  if (!exams.length) throw new ExamsNotFound("Exams Not Found");
  return exams;
}
