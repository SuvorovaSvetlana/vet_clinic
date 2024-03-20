import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Visit } from "./entities/visit.entity"

export class VisitRepository{
      constructor(
            @InjectRepository(Visit)
            private readonly visitRepository: Repository<Visit>
          ){}
}
