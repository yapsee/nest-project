/* eslint-disable @typescript-eslint/no-empty-function */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Body, Delete, Get, Module, Param, Post, Put } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

 
  constructor(private productsService: ProductsService){}

  @Get()
  listProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  createProducts(@Body() product) {
    return this.productsService.addProduct(product)
  }

  @Delete(':id')
  removeOne(@Param('id') productId) {
    return this.productsService.deleteProduct(productId);
  }
  
  @Put(':id')
  update(@Param('id') productId, @Body() product) {
     return this.productsService.updateProduct(productId, product)
  }

}
