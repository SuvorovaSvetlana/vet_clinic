import { Owner } from "src/owner/entities/owner.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";

@Entity()
export class Animal {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      animal_type: string;
      @Column()
      name: string;
      @Column()
      age: number;
      @Column()
      ownerId: number;
      @ManyToOne(() => Owner, 
      owner => owner.animals,
      {
            orphanedRowAction: "delete",
            eager: true,
            onDelete: "CASCADE",
            onUpdate: "CASCADE",
            nullable: false,
      })
      owner: Owner
}