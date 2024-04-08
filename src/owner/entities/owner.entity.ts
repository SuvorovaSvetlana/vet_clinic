
import  { Column, Entity, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Animal } from "../../animal/entities/animal.entity";

@Entity()
export class Owner {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      userName: string;
      @Column()
      email: string;
      @Column()
      password: string;
      @OneToMany(()=>Animal,
      animal => animal.owner,{
      cascade: true,
      })
      animals: Animal[]
}
