/*
https://docs.nestjs.com/providers#services
*/

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoBasicQueriesService } from 'src/commons/services/mongo-basic-queries.service';
import { IReservation } from './interfaces/reservation.interface';
import { reservationModelName } from './schemas/reservation.model-name';

@Injectable()
export class ReservationsService  extends MongoBasicQueriesService<IReservation> {
  constructor(@InjectModel(reservationModelName) private model: Model<IReservation>) {
      super(model);
  }
}