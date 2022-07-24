import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ObjectId } from "mongoose";

@ObjectType()
export class Product {
    @Field(type => ID)
    id: ObjectId;

    @Field()
    name: string;

    @Field( { nullable: true })
    manufacturer: string;

    @Field()
    price: number;
}