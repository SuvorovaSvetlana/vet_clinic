import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Visit } from "../../visit/entities/visit.entity";

@Entity()
export class Vet {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      firstName: string;
      @Column()
      lastName: string;
      @Column()
      speciality: string;
      @Column()
      experience: string;
      @Column()
      foto: string;
      @OneToMany(()=> Visit,
      visit => visit.vet,{
             cascade: true
      })
      visits: Visit[]
}
