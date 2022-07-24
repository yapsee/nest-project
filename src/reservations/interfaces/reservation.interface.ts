import { Document, ObjectId } from "mongoose";
import { IProduct } from "src/products/interfaces/products.interface";
export interface IReservation extends Document {
  products: Partial<IProduct>;
  amount: number;
  client: ObjectId;
}