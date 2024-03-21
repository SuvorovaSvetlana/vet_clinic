import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
      @ManyToOne(()=> Animal,
      animal => animal.visits,
      {
            orphanedRowAction: "delete",
            eager: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
      })
      animal: Animal;
      @ManyToOne(()=>Vet, 
      vet => vet.visits,
      {
            orphanedRowAction: "delete",
            eager: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
      })
      vet: Vet;
}
