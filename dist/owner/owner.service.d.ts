import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';
import { OwnerRepository } from './owner.repository';
export declare class OwnerService {
    private readonly ownerRepository;
    constructor(ownerRepository: OwnerRepository);
    createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: number): Promise<Owner>;
    update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<Owner>;
    remove(id: number): Promise<void>;
}
