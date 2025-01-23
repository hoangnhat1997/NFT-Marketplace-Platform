import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';

@Injectable()
export class OrchestratorService {
  constructor(private readonly kafkaService: KafkaService) {}

  createTransaction(transactionData: any) {
    // Emit event to start the transaction process
    this.kafkaService.emit('transaction-created', transactionData);
  }

  handleAuthVerified(data: any) {
    // Emit event to process the transaction after auth verification
    this.kafkaService.emit('transaction-verified', data);
  }

  handleTransactionProcessed(data: any) {
    // Emit event to process the image after transaction processing
    this.kafkaService.emit('transaction-completed', data);
  }
}
