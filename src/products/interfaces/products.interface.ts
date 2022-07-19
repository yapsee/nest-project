import { Document } from "mongoose";
export class IProduct extends Document{
  title: string;
  manufacturer: string;
}