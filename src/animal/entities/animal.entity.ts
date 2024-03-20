import { Owner } from "src/owner/entities/owner.entity";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
 
export enum AnimalType {
      dog = 'dog',
      cat = 'cat',
      mouse = 'mouse',
      hamster ='hamster',
      rodent = 'rodent',
      fish = 'fish',
      bird = 'bird',
      reptile = 'reptile'
} 

@Entity()
export class Animal {
      @PrimaryGeneratedColumn()
      id: number;
      @Column({
            type: "enum",
            enum: AnimalType
      })
      animal_type: AnimalType
      
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
      })
      owner: Owner
}
