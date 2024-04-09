import { forwardRef, Module } from '@nestjs/common';
import { AuthServiceAdmin, AuthServiceOwner, AuthServiceVet } from './auth.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { OwnerModule } from '../owner/owner.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { AdminModule } from '../admin/admin.module';
import { VetModule } from '../vet/vet.module';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '600s'}
    }),
    forwardRef(() => OwnerModule),
    forwardRef(() => AdminModule),
    forwardRef(() => VetModule)
  ],
  providers: [AuthServiceOwner, AuthServiceAdmin, AuthServiceVet,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [AuthServiceOwner, AuthServiceAdmin, AuthServiceVet]
})
export class AuthModule {}