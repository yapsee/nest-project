import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductInput } from "src/products/dto/product.input";

@InputType()
export class ReservationInput {

    @ApiProperty({type: ProductInput})

    @Field(type => [ProductInput])
    products: ProductInput[];


    @ApiProperty()
    
    @Field()
    amount: number;

}