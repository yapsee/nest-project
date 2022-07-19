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

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule,
    ReservationsModule, ProductsModule, MongooseModule.forRoot(process.env.MONGODB_URL),
     UsersModule,
     AuthModule],
  controllers: [AppController],
  providers: [
    ClientsService, AppService],
})
export class AppModule { }
