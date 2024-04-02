
import { Owner } from "../../owner/owner.entity";
import { AnimalType } from "../entities/animal.entity";


export class CreateAnimalDto {
      animal_type: AnimalType;
      name: string;
      age: number;
      owner: Owner;
      visits: [];
}
