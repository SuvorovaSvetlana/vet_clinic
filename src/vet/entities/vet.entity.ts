import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from "typeorm";
@Entity()
export class Vet {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      full_name: string;
      @Column()
      speciality: string;
}
