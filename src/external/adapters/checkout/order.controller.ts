import { Controller, Post, Body, Get, Param, Query } from '@nestjs/common';
import { OrdersService } from './order.service';
import { CreateOrderDto } from 'src/internal/domain/checkout/dto/create-order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @Post(':orderId/prepare')
  prepare(@Param('orderId') orderId: string) {
    return this.ordersService.prepare(orderId);
  }

  @Post(':orderId/withdrawn')
  withdrawn(@Param('orderId') orderId: string) {
    return this.ordersService.withdrawn(orderId);
  }

  @Get()
  getOrders(
    @Query('customerId') customerId?: string,
    @Query('customerId') status?: string,
  ) {
    return this.ordersService.findAll(customerId, status);
  }
}
