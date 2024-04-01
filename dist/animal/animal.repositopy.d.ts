import { Repository } from "typeorm";
import { Animal } from "./entities/animal.entity";
export declare class AnimalRepository {
    private readonly animalRepo;
    constructor(animalRepo: Repository<Animal>);
    save(animal: Animal): Promise<Animal>;
    find(): Promise<Animal[]>;
    findOne(id: number): Promise<Animal>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
