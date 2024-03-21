import { Visit } from "src/visit/entities/visit.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";

@Entity()
export class Vet {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      full_name: string;
      @Column()
      speciality: string;
      @OneToMany(()=> Visit,
      visit => visit.vet,{
             cascade: true
      })
      visits: Visit[]

}
