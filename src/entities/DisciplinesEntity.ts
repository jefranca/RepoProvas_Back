import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("disciplines")
export default class DisciplineEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
