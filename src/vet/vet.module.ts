import { Module } from '@nestjs/common';
import { VetService } from './vet.service';
import { VetController } from './vet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vet } from './entities/vet.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vet])],
  controllers: [VetController],
  providers: [VetService]
})
export class VetModule {}
