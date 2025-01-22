import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';
import { KafkaService } from './kafka.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
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
    this.kafkaClient.emit('user.created', { id: user.id, email: user.email });
    return user;
  }

  async verifyTransaction(userId: string, transactionId: string) {
    // Verify user and transaction
    this.kafkaService.emit('auth-verified', { userId, transactionId });
  }
}
