import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async register(userData: any) {
    // check if user with email already exists
    const userExists = await this.prisma.user.findUnique({
      where: { email: userData.email },
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
}
