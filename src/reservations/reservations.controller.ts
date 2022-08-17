/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Reservation } from './dto/reservation.entity';
import { ReservationInput } from './dto/reservation.input';
import { ReservationsService } from './reservations.service';

@Controller('reservations')
export class ReservationsController { 
  constructor(private reservationService: ReservationsService){}


 
  @ApiResponse({status: 200, type: [Reservation], description: 'Here is the reservation details'})
  @Get()
  listreservations() {
    return this.reservationService.findAll();
  }

  @ApiParam({name: 'id', type: 'string'})
  @ApiResponse({status: 200, type: Reservation, description: 'Here is the reservation details'})
  @ApiResponse({status: 404, description: 'Aucun reservation trouvé'})

  @Get(':id')
  fetchProduct() {
      return []
  }


  @ApiBody({type: ReservationInput})
  @ApiResponse({status: 201, type: Reservation})
  @ApiResponse({status: 404, description: 'Verifier vos credentials'})

  @Post()
  createreservations(@Body() reservation) {
    return this.reservationService.insertOne(reservation)
  }

  // @Post()
  // createreservations(@Body() reservation) {
  //   return this.reservationService.addReservation(reservation)
  // }

  // @Delete(':id')
  // removeOne(@Param('id') reservationId) {
  //   return this.reservationService.deleteReservation(reservationId);
  // }
  
  // @Put(':id')
  // update(@Param('id') reservationId, @Body() reservation) {
  //    return this.reservationService.updateReservation(reservationId, reservation)
//   }
}
