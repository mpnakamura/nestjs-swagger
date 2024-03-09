import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Swagger Test')
    .setDescription('The Swagger Test API description')
    .setVersion('1.0')
    .addTag('swagger')
    .build();

  const document = SwaggerModule.createDocument(app,options);
  SwaggerModule.setup('api', app, document);

  fs.writeFileSync('./openapi.json', JSON.stringify(document));
  await app.listen(3000);
}
bootstrap();
