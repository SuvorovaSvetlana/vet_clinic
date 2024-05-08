import { Animal } from "../../animal/entities/animal.entity";

export class CreateOwnerDto {
      userName: string;
      email: string;
      password: string;
      animals: Array<Animal>;
}
