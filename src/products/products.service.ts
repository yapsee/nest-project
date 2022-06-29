/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { last, NotFoundError } from 'rxjs';

@Injectable()

export class ProductsService {

  products = [
    {id:1, name: 'oculus', manufacturer: 'meta'},
    {id:2, name: 's4', manufacturer: 'samsung'},
    {id:3, name: 'iphoneX', manufacturer: 'apple'}
  ]

  getProducts(){
    return this.products
  }

  findProduct(productId){
    const product = this.products.find(p => p.id === productId)
    return product
  }

  addProduct(product){

    const lastProduct = this.products.find((product)=> product.id == (this.products.length))
    product.id = lastProduct.id + 1 ;
    this.products.push(product)
    return product
  }

  updateProduct(productId, product){
   const index = this.products.findIndex((product)=> product.id == productId);
   if(index < 0){
    throw new NotFoundException
   }
   const newproduct  = this.products[index] = {...this.products[index], ...product }
   return newproduct
  }

  deleteProduct(productId){
    const index = this.products.findIndex((product) => product.id == productId);
    if(index < 0){
       throw new NotFoundException
    }
    this.products.splice(index, 1);
    return ('Product deleted successfully')

  }
}
