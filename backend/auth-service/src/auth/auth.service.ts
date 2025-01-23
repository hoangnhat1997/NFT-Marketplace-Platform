import { Injectable } from '@nestjs/common';
import { KafkaService } from 'src/kafka/kafka.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private readonly kafkaService: KafkaService,
  ) {}

  async login(userData: any) {
    // check if user with wallet address already exists
    const userExists = await this.prisma.user.findUnique({
      where: { walletAddress: userData.wallet_address },
    });
    if (userExists) {
      throw new Error('User with this email already exists');
    }
    // Save user in DB
    const user = await this.prisma.user.create({ data: userData });

    // Emit user created event
    this.kafkaService.emit('user.created', { id: user.id, email: user.email });
    return user;
  }

  async verifyTransaction(userId: string, transactionId: string) {
    // Verify user and transaction
    this.kafkaService.emit('auth-verified', { userId, transactionId });
  }
}
