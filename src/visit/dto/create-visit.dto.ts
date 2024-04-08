import { Animal } from "../../animal/entities/animal.entity";
import { Vet } from "../../vet/entities/vet.entity";



export class CreateVisitDto {
      date: string;
      vet: Vet;
      animal: Animal;
}
