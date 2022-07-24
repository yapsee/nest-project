import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { reservationModelName } from './schemas/reservation.model-name';
import { reservationSchema } from './schemas/reservation.schema';
import { RerservationResolver } from './reservation.resolver';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { ReservationsPropertyResolver } from './reservations-property.resolver';

@Module({
    imports: [ MongooseModule.forFeature([ { name: reservationModelName, schema: reservationSchema } ]),AuthModule,
    UsersModule],
    controllers: [ ReservationsController,],
    providers: [ ReservationsService,RerservationResolver, ReservationsPropertyResolver],
})
export class ReservationsModule { }
