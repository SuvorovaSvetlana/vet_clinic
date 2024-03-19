import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "src/animal/entities/animal.entity"
import {Owner} from "src/owner/entities/owner.entity"

@Entity()
export class Visit {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      vetName: string;
      @Column()
      animalName: string;
      @Column()
      visitPurpose: string;
      @ManyToMany(() => Animal)
      @JoinTable()
      animals: Animal[];
      @ManyToMany(()=> Owner)
      @JoinTable()
      Owners: Owner[]
}
