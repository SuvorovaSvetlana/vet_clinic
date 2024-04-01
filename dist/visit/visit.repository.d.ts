import { Repository } from "typeorm";
import { Visit } from "./entities/visit.entity";
export declare class VisitRepository {
    private readonly visitRepo;
    constructor(visitRepo: Repository<Visit>);
    save(visit: Visit): Promise<Visit>;
    find(): Promise<Visit[]>;
    findOne(id: number): Promise<Visit>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
