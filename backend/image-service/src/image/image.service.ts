import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostNFTDto } from './dto/post-nft.dto';

@Injectable()
export class ImageService {
  constructor(
    private prisma: PrismaService,
    private readonly kafkaService: KafkaService,
  ) {}

  async processImage(transactionId: string) {
    // Process image logic
    this.kafkaService.emit('image-processed', { transactionId });
  }

  async postNFT(body: PostNFTDto) {
    // Post NFT logic
    const result = await this.prisma.nFT.create({
      name: body.nameNFT,
      userId: body.userId,
      url: body.url,
    });
    this.kafkaService.emit('nft-posted', { nftId: '123' });

    return result;
  }
}
