import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class VisitHistory {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      visitDate: Date;
      @Column()
      visitPurpose: string;
      @Column()
      orders: string;
      @Column()
      vetId: number;
      @Column()
      animalId: number;
}