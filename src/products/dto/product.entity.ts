import { Field, ID, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ObjectId } from "mongoose";

@ObjectType()
export class Product {
    @ApiProperty()

    @Field(type => ID)
    id: ObjectId;

    @ApiProperty()

    @Field()
    name: string;
    
    @ApiProperty()
    
    @Field( { nullable: true })
    manufacturer: string;

    @Field()
    price: number;
}