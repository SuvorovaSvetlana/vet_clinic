import { DataSource } from 'typeorm';
import * as path from 'path';
import * as dotenv from 'dotenv';
import { Animal } from '../../animal/entities/animal.entity';
import { Owner } from '../../owner/owner.entity';
import { Visit } from '../../visit/entities/visit.entity';
import { Vet } from '../../vet/entities/vet.entity';

const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });
const AppDataSource = new DataSource({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Animal, Owner, Vet, Visit],
      migrations: [__dirname + 'build/shared/typeorm/migrations/*.{js,ts}'],
});

export default AppDataSource;