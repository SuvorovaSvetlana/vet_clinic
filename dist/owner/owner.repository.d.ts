import { Repository } from "typeorm";
import { Owner } from "./entities/owner.entity";
export declare class OwnerRepository {
    private readonly ownerRepo;
    constructor(ownerRepo: Repository<Owner>);
    save(owner: Owner): Promise<Owner>;
    find(): Promise<Owner[]>;
    findOne(id: number): Promise<Owner>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
