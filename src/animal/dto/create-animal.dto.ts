import { Owner } from "src/owner/entities/owner.entity";

export class CreateAnimalDto {
      animal_type: string;
      name: string;
      age: number;
      owner: Owner;
}
