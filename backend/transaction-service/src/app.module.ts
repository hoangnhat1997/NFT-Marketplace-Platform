import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { KafkaModule } from './kafka/kafka.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import config from './config';

@Module({
  imports: [
    TransactionModule,
    KafkaModule,
    ClientsModule.register([
      {
        name: config().services.auth.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.transaction.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.auth.groupId,
          },
        },
      },
      {
        name: config().services.image.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.transaction.clientId,
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
