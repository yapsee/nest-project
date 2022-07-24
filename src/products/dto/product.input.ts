import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProductInput {
    @Field()
    name: string;

    @Field()
    manufacturer: string;

    @Field()
    price: number;
}