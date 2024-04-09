import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
      @PrimaryGeneratedColumn()
      id: number;
      @Column()
      adminName: string;
      @Column()
      email: string;
      @Column()
      password: string;
}
