
import { Owner } from "../../owner/owner.entity";
import { AnimalType } from "../entities/animal.entity";


export class CreateAnimalDto {
      animalType: AnimalType;
      breed: string;
      name: string;
      dateOfBirth: Date;
      foto: string;
      owner: Owner;
      visits: [];
}
