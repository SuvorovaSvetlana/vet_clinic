import { VetService } from './vet.service';
import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';
export declare class VetController {
    private readonly vetService;
    constructor(vetService: VetService);
    create(createVetDto: CreateVetDto): Promise<Vet>;
    findAll(): Promise<Vet[]>;
    findOne(id: string): Promise<Vet>;
    update(id: string, updateVetDto: UpdateVetDto): Promise<Vet>;
    remove(id: string): Promise<void>;
}
