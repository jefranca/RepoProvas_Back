import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn } from "typeorm";
import ProfessorEntity from "./ProfessorsEntity";

@Entity("disciplines")
export default class DisciplineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;


}
