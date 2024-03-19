import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { Owner } from './entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Owner])],
  controllers: [OwnerController],
  providers: [OwnerService],
  exports: [TypeOrmModule],
})
export class OwnerModule {}
