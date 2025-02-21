import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class TransactionService {
  constructor(private readonly kafkaService: KafkaService) {}

  async createTransaction(transactionData: any) {
    // Create transaction in the database
    const transactionId = 'some-transaction-id';
    this.kafkaService.emit('transaction-created', {
      transactionId,
      ...transactionData,
    });
    return { transactionId };
  }

  async processTransaction(userId: string, transactionId: string) {
    // Process transaction
    this.kafkaService.emit('transaction-processed', { userId, transactionId });
  }
}
