/* eslint-disable @typescript-eslint/no-empty-function */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Body, Delete, Get, Module, Param, Post, Put } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { IUser } from 'src/users/interfaces/user.interface';
import { ProductsService } from './products.service';

// @UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {

 
  constructor(private productsService: ProductsService){}


  @Get()
  fetchProducts(@CurrentUser() currentUser: IUser) {
      console.log({ currentUser })
      return []
  }


  // @Get()
  // listProducts() {
  //   return this.productsService.getProducts();
  // }

  // @Post()
  // createProducts(@Body() product) {
  //   return this.productsService.addProduct(product)
  // }

  // @Delete(':id')
  // removeOne(@Param('id') productId) {
  //   return this.productsService.deleteProduct(productId);
  // }
  
  // @Put(':id')
  // update(@Param('id') productId, @Body() product) {
  //    return this.productsService.updateProduct(productId, product)
  // }

}
