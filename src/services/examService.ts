import { getRepository } from "typeorm";

import Exam from "../entities/Exams";

interface newExam{
  name: string;
  category_id: number;
  professor_id: number;
  url: string;
}

export async function postExam (newExam:newExam) {
  const users = await getRepository(Exam).insert(newExam);
  
  return users;
}
