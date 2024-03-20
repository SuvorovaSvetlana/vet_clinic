import { Owner } from "src/owner/entities/owner.entity";
import { AnimalType } from "../entities/animal.entity";


export class CreateAnimalDto {
      animal_type: AnimalType;
      name: string;
      age: number;
      owner: Owner;
}
