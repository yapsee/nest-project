/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductReservation } from "./dto/product-reservation.type";
import { Product } from "./dto/product.entity";
import { ProductInput } from "./dto/product.input";
import { IProduct } from "./interfaces/products.interface";
import { ProductsService } from "./products.service";

@Resolver()
export class ProductsResolver {
    constructor(private productService: ProductsService) {}

    @Query(returns => [Product])
    async fetchProducts() {
      return this.productService.findAll();
    }


    @Mutation(returns => Product)
    async createProduct(
      @Args({ name: 'productInput', type: () => ProductInput }) product: IProduct) {
      const new_product = await this.productService.insertOne(product);
      return new_product;
    }

    @Query(returns => [ProductReservation])
    async fetchProductsReservations() {
      return this.productService.fetchProductsReservations();
  }
  }