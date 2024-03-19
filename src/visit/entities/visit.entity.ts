import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "src/animal/entities/animal.entity"
import { Vet } from "src/vet/entities/vet.entity";


@Entity()
export class Visit {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      date: Date;
      @Column()
      vetName: string;
      @Column()
      animalName: string;
      @Column()
      visitPurpose: string;
      @ManyToMany(() => Animal)
      @JoinTable()
      animals: Animal[];
      @ManyToMany(()=> Vet, (vet) => vet.visits, {cascade: true})
      @JoinTable()
      vets: Vet[];
}
