import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Param,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response, Express } from 'express';
import { join } from 'path';

import { ImageService } from './image.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('image')
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  @Post('upload-image')
  @UseInterceptors(FileInterceptor('file'))
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return { filename: file.filename };
  }

  @Post('post-nft')
  async postNFT(@Res() res: Response) {
    await this.imageService.postNFT();
    return res.status(200).send('NFT posted');
  }

  @Get(':imgpath')
  seeUploadedFile(@Param('imgpath') image, @Res() res: Response) {
    return res.sendFile(join(process.cwd(), 'uploads/' + image));
  }

  @EventPattern('transaction-processed')
  async handleTransactionProcessed(data: Record<string, unknown>) {
    await this.imageService.processImage(data['transactionId'] as string);
  }
}
