import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';
import { VisitRepository } from './visit.repository';
export declare class VisitService {
    private readonly visitRepository;
    constructor(visitRepository: VisitRepository);
    create(createVisitDto: CreateVisitDto): Promise<Visit>;
    findAll(): Promise<Visit[]>;
    findOne(id: number): Promise<Visit>;
    update(id: number, updateVisitDto: UpdateVisitDto): Promise<Visit>;
    remove(id: number): Promise<void>;
}
