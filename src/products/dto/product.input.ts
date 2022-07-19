import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class ProductInput {
    @Field()
    title: string;

    @Field()
    manufacturer: string;
}