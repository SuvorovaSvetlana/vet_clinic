import { Animal } from "../../animal/entities/animal.entity";
import { Vet } from "../../vet/entities/vet.entity";



export class CreateVisitDto {
      date: Date;
      vetName: string;
      vet: Vet;
      animalName: string;
      animal: Animal;
      visitPurpose: string;
}
