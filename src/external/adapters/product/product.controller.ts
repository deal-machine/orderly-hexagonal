import {
  Controller,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Get,
} from '@nestjs/common';
import { ProductsService } from './product.service';
import { CreateProductDto } from 'src/internal/domain/product/dto/create-product.dto';
import { UpdateProductDto } from 'src/internal/domain/product/dto/update-product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Put()
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete()
  delete(@Param('id') id: string) {
    return this.productsService.delete(id);
  }

  @Get()
  findByCategory(@Param('category') category: string) {
    return this.productsService.findByCategory(category);
  }
}
