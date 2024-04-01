import { CreateVetDto } from './dto/create-vet.dto';
import { UpdateVetDto } from './dto/update-vet.dto';
import { Vet } from './entities/vet.entity';
import { VetRepository } from './vet.repository';
export declare class VetService {
    private readonly vetRepository;
    constructor(vetRepository: VetRepository);
    create(createVetDto: CreateVetDto): Promise<Vet>;
    findAll(): Promise<Vet[]>;
    findOne(id: number): Promise<Vet>;
    update(id: number, updateVetDto: UpdateVetDto): Promise<Vet>;
    remove(id: number): Promise<void>;
}
