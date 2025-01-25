import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import {
  ClientKafka,
  Transport,
  ClientProxyFactory,
} from '@nestjs/microservices';

@Injectable()
export class KafkaService implements OnModuleInit, OnModuleDestroy {
  private client: ClientKafka;

  constructor(private readonly clientKafka: ClientKafka) {}
  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [process.env.KAFKA_BROKER || 'kafka:9092'], // Use the Kafka service name
        },
        consumer: {
          groupId: 'image-service-consumer', // Unique group id for the service
        },
      },
    }) as ClientKafka;

    // Subscribe to topics
    this.client.subscribeToResponseOf('some-topic'); // Replace 'some-topic' with your actual topic
  }

  async onModuleDestroy() {
    await this.client.close();
  }

  async sendMessage(topic: string, message: any) {
    return this.client.send(topic, message);
  }

  emit(topic: string, message: any) {
    this.clientKafka.emit(topic, message);
  }
}
