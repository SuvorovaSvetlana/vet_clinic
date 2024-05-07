
import { Owner } from "../../owner/entities/owner.entity";
import { Visit } from "../../visit/entities/visit.entity";
import { AnimalType } from "../entities/animal.entity";


export class CreateAnimalDto {
      animalType: AnimalType;
      breed: string;
      name: string;
      dateOfBirth: Date;
      foto: string;
      owner: Owner;
      visits: Array<Visit>;
}
