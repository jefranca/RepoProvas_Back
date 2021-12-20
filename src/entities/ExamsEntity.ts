import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import CategoryEntity from "./CategoryEntity";
import ProfessorEntity from "./ProfessorsEntity";

@Entity("exams")
export default class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category_id: number;

  @Column()
  professor_id: number;

  @Column()
  url: string;

  @ManyToOne(() => ProfessorEntity)
  @JoinColumn({ name: "professor_id" })
  professors: ProfessorEntity;

  @ManyToOne(() => CategoryEntity)
  @JoinColumn({ name: "category_id" })
  categories: CategoryEntity;
}
