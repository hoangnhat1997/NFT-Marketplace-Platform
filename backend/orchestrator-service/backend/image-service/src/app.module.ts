import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import config from './config';
import { ImageModule } from './image/image.module';

import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    KafkaModule,
    ImageModule,
    ClientsModule.register([
      {
        name: config().services.transaction.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.image.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.transaction.groupId,
          },
        },
      },
      {
        name: config().services.auth.name,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: config().services.image.clientId,
            brokers: [config().broker],
          },
          consumer: {
            groupId: config().services.auth.groupId,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
