import { MongoBasicQueriesService } from './commons/services/mongo-basic-queries.service';
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';
import { ReservationsModule } from './reservations/reservations.module';
import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppInterceptor } from './app.interceptor';
import { GqlUuid } from './commons/graphql/uuid.scalar';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    ReservationsModule, ProductsModule, MongooseModule.forRoot(process.env.MONGODB_URL),
    UsersModule, GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: 'schema.gql',
      driver: ApolloDriver,
      resolvers: { UUID: GqlUuid },
      playground: process.env.mode !== "prod"
    }),
    AuthModule],
  controllers: [AppController],
  providers: [ AppService, {
    provide: APP_INTERCEPTOR,
    useClass: AppInterceptor
  }],
})
export class AppModule { }
