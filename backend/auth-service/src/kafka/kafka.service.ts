import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  constructor(@Inject('KAFKA_SERVICE') private readonly client: ClientKafka) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf(' initial topic');
    await this.client.connect();
  }
  async onModuleDestroy() {
    await this.client.close();
  }

  async sendMessage(topic: string, message: any) {
    return this.client.send(topic, message);
  }

  emit(topic: string, message: any) {
    this.client.emit(topic, message);
  }
}
