import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Animal } from "../../animal/entities/animal.entity";
import { Vet } from "../../vet/entities/vet.entity";

@Entity()
export class Visit {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      date: string;
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
