import { Document } from "mongoose";
export class IProduct extends Document{
  name: string;
  manufacturer: string;
}