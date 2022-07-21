import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productModelName } from './schema/products.model-name';
import { productsschema } from './schema/products.schema';
import { AuthModule } from 'src/auth/auth.module';
import { ProductsResolver } from './products.resolver';


@Module({
  imports: [AuthModule, MongooseModule.forFeature([{name: productModelName, schema: productsschema}])],
  controllers: [ProductsController],
  providers: [ProductsService, ProductsResolver]
})
export class ProductsModule {
 }
