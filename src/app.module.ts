import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients/clients.service';
import { ReservationsModule } from './reservations/reservations.module';
import { ProductsModule } from './products/products.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule,
    ReservationsModule, ProductsModule],
  controllers: [AppController],
  providers: [
    ClientsService, AppService],
})
export class AppModule { }
