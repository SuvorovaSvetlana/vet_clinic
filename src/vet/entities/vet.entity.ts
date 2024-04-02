import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Visit } from "../../visit/entities/visit.entity";

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
