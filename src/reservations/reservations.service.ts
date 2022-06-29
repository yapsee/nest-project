/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ReservationsService { 
 private reservations = [
  {id:1, cliendId: 300, reservationId: 1, count: 1, amount: 6777600},
  {id:2, cliendId: 300, reservationId: 2, count: 1, amount: 90600}
]

getReservations(){
  return this.reservations
}

findReservation(reservationId){
  const reservation = this.reservations.find(reservation => reservation.id === reservationId)
  return reservation
}

addReservation(reservation){

  const lastreservation = this.reservations.find((reservation)=> reservation.id == (this.reservations.length))
  reservation.id = lastreservation.id + 1 ;
  this.reservations.push(reservation)
  return reservation
}

updateReservation(reservationId, reservation){
 const index = this.reservations.findIndex((reservation)=> reservation.id == reservationId);
 if(index < 0){
  throw new NotFoundException
 }
 const newreservation  = this.reservations[index] = {...this.reservations[index], ...reservation }
 return newreservation
}

deleteReservation(reservationId){
  const index = this.reservations.findIndex((reservation) => reservation.id == reservationId);
  if(index < 0){
     throw new NotFoundException
  }
  this.reservations.splice(index, 1);
  return ('reservation deleted successfully')

}
}
