/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController { 
  constructor(private reservationService: ReservationsService){}

  @Get()
  listreservations() {
    return this.reservationService.getReservations();
  }

  @Post()
  createreservations(@Body() reservation) {
    return this.reservationService.addReservation(reservation)
  }

  @Delete(':id')
  removeOne(@Param('id') reservationId) {
    return this.reservationService.deleteReservation(reservationId);
  }
  
  @Put(':id')
  update(@Param('id') reservationId, @Body() reservation) {
     return this.reservationService.updateReservation(reservationId, reservation)
  }
}
