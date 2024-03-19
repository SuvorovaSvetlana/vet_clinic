import  { Module } from '@nestjs/common';
import { OwnerController } from './owner.controller';
import { OwnerModule } from './owner.module';
import { OwnerService } from './owner.service';

@Module({
      imports: [OwnerModule],
      providers: [OwnerService],
      controllers: [OwnerController]
})
export class OwnerHttpModule {}