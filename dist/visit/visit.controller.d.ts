import { VisitService } from './visit.service';
import { CreateVisitDto } from './dto/create-visit.dto';
import { UpdateVisitDto } from './dto/update-visit.dto';
import { Visit } from './entities/visit.entity';
export declare class VisitController {
    private readonly visitService;
    constructor(visitService: VisitService);
    create(createVisitDto: CreateVisitDto): Promise<Visit>;
    findAll(): Promise<Visit[]>;
    findOne(id: string): Promise<Visit>;
    update(id: string, updateVisitDto: UpdateVisitDto): Promise<Visit>;
    remove(id: string): Promise<void>;
}
