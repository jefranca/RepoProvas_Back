import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import DisciplineEntity from "./DisciplinesEntity";

@Entity("professors")
export default class ProfessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  discipline_id: number;

  @ManyToOne(() => DisciplineEntity, (discipline) => discipline.id)
  @JoinColumn({ name: "discipline_id" })
  disciplines: DisciplineEntity;
}
