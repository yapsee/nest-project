import { Field, InputType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
export class ProductInput {
    @ApiProperty()

    @Field()
    name: string;

    @ApiProperty()

    @Field()
    manufacturer: string;

    @ApiProperty()

    @Field()
    price: number;
}