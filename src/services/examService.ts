import { getRepository } from "typeorm";
import ExamEntity from "../entities/ExamsEntity";
import UrlAlreadyExist from "../errors/UrlAlreadyExist";
import { newExam } from "../interfaces/newExam";

export async function postExam(newExam:newExam){
  const examsRepository = await getRepository(ExamEntity);
  const isUrlValid = await examsRepository.find({
    where: { url : newExam.url },
  });
  if(isUrlValid.length) throw new UrlAlreadyExist("This url already exist")
  await examsRepository.save(newExam);
}