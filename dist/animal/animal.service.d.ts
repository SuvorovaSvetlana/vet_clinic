import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';
import { Animal } from './entities/animal.entity';
import { AnimalRepository } from './animal.repositopy';
export declare class AnimalService {
    private readonly animalRepository;
    constructor(animalRepository: AnimalRepository);
    create(createAnimalDto: CreateAnimalDto): Promise<Animal>;
    findAll(): Promise<Animal[]>;
    findOne(id: number): Promise<Animal>;
    update(id: number, updateAnimalDto: UpdateAnimalDto): Promise<Animal>;
    remove(id: number): Promise<void>;
}
