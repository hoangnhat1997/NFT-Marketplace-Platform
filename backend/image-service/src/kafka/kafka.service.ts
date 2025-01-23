import { Injectable } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaService {
  constructor(private readonly clientKafka: ClientKafka) {}

  emit(topic: string, message: any) {
    this.clientKafka.emit(topic, message);
  }
}
