import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Product {
    @Field(type => ID)
    id: string;

    @Field({ nullable: true })
    name: string;

    @Field({ nullable: true })
    manufacturer: string;
}