import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LibrosController } from './libros/libros.controller';
import { LibrosService } from './libros/libros.service';
import {MongooseModule} from '@nestjs/mongoose';
import {LibroSchema} from './libros/schemas/libros.schemas';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb://127.0.0.1:27017/'),
  MongooseModule.forFeature([{name: 'libro', schema: LibroSchema}])
],
  controllers: [AppController, LibrosController],
  providers: [AppService, LibrosService],
})
export class AppModule {}
