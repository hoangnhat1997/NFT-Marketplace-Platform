import { Module } from '@nestjs/common';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { MulterModule } from '@nestjs/platform-express';

import { ImageController } from './image.controller';
import { ImageService } from './image.service';
import { KafkaModule } from 'src/kafka/kafka.module';

@Module({
  imports: [
    KafkaModule,
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          cb(
            null,
            `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`,
          );
        },
      }),
    }),
  ],
  controllers: [ImageController],
  providers: [ImageService],
})
export class ImageModule {}
