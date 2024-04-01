import { Repository } from "typeorm/repository/Repository";
import { Vet } from "./entities/vet.entity";
export declare class VetRepository {
    private readonly vetRepo;
    constructor(vetRepo: Repository<Vet>);
    save(vet: Vet): Promise<Vet>;
    find(): Promise<Vet[]>;
    findOne(id: number): Promise<Vet>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
