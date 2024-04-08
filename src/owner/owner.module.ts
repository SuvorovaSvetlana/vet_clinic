import { forwardRef, Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { Owner } from './entities/owner.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerRepository } from './owner.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Owner]), 
  forwardRef(() => AuthModule)],
  controllers: [OwnerController],
  providers: [OwnerService, OwnerRepository],
  exports: [OwnerService, OwnerRepository]
})
export class OwnerModule {}
