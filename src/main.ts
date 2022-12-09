import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
  .setTitle('Libros')
  .setDescription('Crud De Mi Primer Proyecto NestJS con Swagger Incluido')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('/', app, document);


  await app.listen(3000);
}
bootstrap();
