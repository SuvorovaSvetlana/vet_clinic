import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { Animal } from "../../animal/entities/animal.entity";
import { Owner } from "../../owner/entities/owner.entity";
import { Vet } from "../../vet/entities/vet.entity";
import { Visit } from "../../visit/entities/visit.entity";


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: Number(this.configService.get<string>('DB_PORT')),
      database: this.configService.get<string>('DB_NAME'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      entities: [Animal, Owner, Vet, Visit],
      migrations: ['dist/src/shared/typeorm/migrations/*.{ts,js}'],
      logging: false,
      autoLoadEntities: true,
      synchronize: false,
    };
  }
}