import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';
import { CreatedOrderEvent } from 'src/domain/checkout/events/order-created.event';

@Injectable()
export class PublishOrderRequestListener {
  constructor(
    @InjectQueue('payments')
    private paymentQueue: Queue,
  ) {}

  @OnEvent('order.created')
  async handle(event: CreatedOrderEvent) {
    await this.paymentQueue.add('payment.requested', event);
  }
}
