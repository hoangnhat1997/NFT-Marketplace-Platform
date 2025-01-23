import { Controller, Post, Body } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { TransactionService } from './transaction.service';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  async createTransaction(@Body() createTransactionDto: any) {
    return this.transactionService.createTransaction(createTransactionDto);
  }

  @EventPattern('transaction-verified')
  async handleAuthVerified(data: Record<string, unknown>) {
    await this.transactionService.processTransaction(
      data['userId'] as string,
      data['transactionId'] as string,
    );
  }
}
