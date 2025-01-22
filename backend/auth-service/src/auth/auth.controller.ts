import { Body, Controller, Post } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<any> {
    return this.authService.login(loginDto);
  }

  @EventPattern('transaction-created')
  async handleTransactionCreated(data: Record<string, unknown>) {
    await this.authService.verifyTransaction(
      data['userId'],
      data['transactionId'],
    );
  }
}
