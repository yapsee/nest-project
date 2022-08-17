/* eslint-disable @typescript-eslint/no-empty-function */
/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get } from "@nestjs/common"
import { ApiParam, ApiQuery, ApiResponse } from "@nestjs/swagger"
import { CurrentUser } from "src/auth/decorators/current-user.decorator"
import { IUser } from "src/users/interfaces/user.interface"
import { Product } from "./dto/product.entity"
import { ProductsService } from "./products.service"



 //@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {

 
  constructor(private productsService: ProductsService){}

 
  @Get()
  fetchProducts(@CurrentUser() currentUser: IUser) {
      console.log({ currentUser })
      return []
  }

  @ApiParam({name: 'id', type: 'string'})
  @ApiResponse({status: 200, type: [Product], description: 'Here is the products details'})
  @ApiResponse({status: 404, description: 'Aucun produit trouvé'})

  @Get(':id')
  fetchProduct() {
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
