import { Animal } from "src/animal/entities/animal.entity";
import  { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Owner {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      full_name: string;
      @Column()
      contacts: string;
      @OneToMany(()=>Animal, 
      animal => animal.owner,{
      cascade: true,
      })
      animals: Animal[]
}
