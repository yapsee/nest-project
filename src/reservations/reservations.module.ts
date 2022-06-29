import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        ReservationsController,],
    providers: [
        ReservationsService,],
})
export class ReservationsModule { }
