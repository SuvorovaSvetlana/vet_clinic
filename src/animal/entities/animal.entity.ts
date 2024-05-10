import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { Owner } from "../../owner/entities/owner.entity";
import { Visit } from "../../visit/entities/visit.entity";
 
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
      animalType: AnimalType;
      @Column()
      breed: string;
      @Column()
      name: string;
      @Column()
      dateOfBirth: Date;
      @Column()
      foto: string;
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
      owner: Owner;
      @OneToMany(() => Visit,
      visit => visit.animal,{
            cascade: true
      })
      visits: Visit[];
}
