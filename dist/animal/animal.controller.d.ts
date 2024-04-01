import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';
export declare class AnimalController {
    private readonly animalService;
    constructor(animalService: AnimalService);
    create(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    findAll(): Promise<Animal[]>;
    findOne(id: string): Promise<Animal>;
    update(id: string, updateAnimalDto: UpdateAnimalDto): Promise<Animal>;
    remove(id: string): Promise<void>;
}
