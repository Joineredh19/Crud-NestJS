import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Backend Sistema de Traslados')
  .setDescription('Documentacion de la API del Sistema de Traslados')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('/', app, document);

  
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
