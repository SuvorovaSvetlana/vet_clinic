import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { ConfigModule, ConfigService} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from './owner/owner.module';
import { VetModule } from './vet/vet.module';
import { VisitModule } from './visit/visit.module';
import { Animal } from './animal/entities/animal.entity';
import { Owner } from './owner/owner.entity';
import { Vet } from './vet/entities/vet.entity';
import { Visit } from './visit/entities/visit.entity';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (ConfigService: ConfigService)=>({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USERNAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        synchronize: true,
        entities: [Animal, Owner, Vet, Visit],
      }),
      inject: [ConfigService],
    }),
    OwnerModule,
    VetModule,
    VisitModule,
    AnimalModule,
  ],
  controllers: [AppController], 
  providers: [AppService],
})
export class AppModule {}
/*       useFactory: (ConfigService: ConfigService) =>({
        type: 'postgres',
        host: ConfigService.get('DB_HOST'),
        port: ConfigService.get('DB_PORT'),
        username: ConfigService.get('DB_USERNAME'),
        password: ConfigService.get('DB_PASSWORD'),
        database: ConfigService.get('DB_NAME'),
        synchronize: false,
        entities: [Animal, Owner, Vet, Visit],
        migrations: [__dirname + '/migrations'],
        migrationTableName: "migrations"
      }),
            useClass: TypeOrmConfigService,
      dataSourceFactory: async () => {
        return AppDataSource;
      }
      */