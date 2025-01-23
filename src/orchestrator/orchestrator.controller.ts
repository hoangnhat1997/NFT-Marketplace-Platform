import { Controller, Post, Body } from '@nestjs/common';
import { OrchestratorService } from './orchestrator.service';
import { EventPattern } from '@nestjs/microservices';

@Controller('orchestrator')
export class OrchestratorController {
  constructor(private readonly orchestratorService: OrchestratorService) {}

  @Post('create-transaction')
  createTransaction(@Body() createTransactionDto: any) {
    return this.orchestratorService.createTransaction(createTransactionDto);
  }

  @EventPattern('auth-verified')
  handleAuthVerified(data: Record<string, unknown>) {
    this.orchestratorService.handleAuthVerified(data);
  }

  @EventPattern('transaction-processed')
  handleTransactionProcessed(data: Record<string, unknown>) {
    this.orchestratorService.handleTransactionProcessed(data);
  }
}
