import { CreateAnimalDto } from './create-animal.dto';
import { Owner } from 'src/owner/entities/owner.entity';
import { AnimalType } from '../entities/animal.entity';
declare const UpdateAnimalDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAnimalDto>>;
export declare class UpdateAnimalDto extends UpdateAnimalDto_base {
    animal_type: AnimalType;
    name: string;
    age: number;
    owner: Owner;
    visits: [];
}
export {};
