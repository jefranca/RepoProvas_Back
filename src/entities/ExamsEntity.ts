import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

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
}
