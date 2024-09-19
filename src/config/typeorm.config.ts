
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'post',
  database: 'sistema_traslados',
  entities: [User],
  synchronize: true,
  logging: true,
  logger: 'file',
  ssl: false,
};

