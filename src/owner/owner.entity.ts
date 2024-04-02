
import  { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Animal } from "../animal/entities/animal.entity";

@Entity()
export class Owner {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      full_name: string;
      @Column()
      contacts: string;
      @Column()
      contacts2: string;
      @OneToMany(()=>Animal, 
      animal => animal.owner,{
      cascade: true,
      })
      animals: Animal[]
}
