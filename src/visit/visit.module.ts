import { Module } from '@nestjs/common';
import { VisitService } from './visit.service';
import { VisitController } from './visit.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Visit } from './entities/visit.entity';
import { VisitRepository } from './visit.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Visit]), TypeOrmModule.forFeature([VisitRepository])],
  controllers: [VisitController],
  providers: [VisitService, VisitRepository],
})
export class VisitModule {}
