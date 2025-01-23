import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class ImageService {
  constructor(private readonly kafkaService: KafkaService) {}

  async processImage(transactionId: string) {
    // Process image logic
    this.kafkaService.emit('image-processed', { transactionId });
  }
}
