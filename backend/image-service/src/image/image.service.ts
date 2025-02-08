import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { PrismaService } from 'src/prisma/prisma.service';

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

  async postNFT() {
    // Post NFT logic
    const result = await this.prisma.NFT.create({ data: { title: 'NFT' } });
    this.kafkaService.emit('nft-posted', { nftId: '123' });

    return result;
  }
}
