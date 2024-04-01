import { Owner } from "src/owner/entities/owner.entity";
import { Visit } from "src/visit/entities/visit.entity";
export declare enum AnimalType {
    dog = "dog",
    cat = "cat",
    mouse = "mouse",
    hamster = "hamster",
    rodent = "rodent",
    fish = "fish",
    bird = "bird",
    reptile = "reptile"
}
export declare class Animal {
    id: number;
    animal_type: AnimalType;
    name: string;
    age: number;
    ownerId: number;
    owner: Owner;
    visits: Visit[];
}
