import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';
export declare class OwnerController {
    private readonly ownerService;
    constructor(ownerService: OwnerService);
    createOwner(createOwnerDto: CreateOwnerDto): Promise<Owner>;
    findAll(): Promise<Owner[]>;
    findOne(id: string): Promise<Owner>;
    update(id: string, updateOwnerDto: UpdateOwnerDto): Promise<Owner>;
    remove(id: string): Promise<void>;
}
