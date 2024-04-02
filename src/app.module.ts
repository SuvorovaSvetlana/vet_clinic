import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimalModule } from './animal/animal.module';
import { ConfigModule} from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OwnerModule } from './owner/owner.module';
import { VetModule } from './vet/vet.module';
import { VisitModule } from './visit/visit.module';
import { TypeOrmConfigService } from './shared/typeorm/ormconfig';
import AppDataSource from './shared/typeorm/dataSource';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async () => {
        return AppDataSource;
      }
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
      }),*/