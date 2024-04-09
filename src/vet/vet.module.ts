import { forwardRef, Module } from '@nestjs/common';
import { VetService } from './vet.service';
import { VetController } from './vet.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vet } from './entities/vet.entity';
import { VetRepository } from './vet.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Vet]),
  forwardRef(()=>AuthModule)],
  controllers: [VetController],
  providers: [VetService, VetRepository],
  exports: [VetService, VetRepository]
})
export class VetModule {}
