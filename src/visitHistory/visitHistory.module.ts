import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { VisitHistory } from "./entities/visitHistory.entity";
import { VisitHistoryRepository } from "./visitHistory.repository";
import { VisitHistoryController } from "./visitHistory.controller";
import { VisitHistoryService } from "./visitHistory.service";

@Module({
      imports: [TypeOrmModule.forFeature([VisitHistory])],
      controllers: [VisitHistoryController],
      providers: [VisitHistoryService, VisitHistoryRepository]
    })
    export class VisitHistoryModule {}  