import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import config from './config';
import { AuthModule } from './auth/auth.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    KafkaModule,
    AuthModule,
    ClientsModule.register([
      {
        name: config().services.transaction.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.auth.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.transaction.groupId,
          },
        },
      },
      {
        name: config().services.image.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.auth.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.image.groupId,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
