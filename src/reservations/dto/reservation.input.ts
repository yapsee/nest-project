import { InputType, Field } from "@nestjs/graphql";
import { ProductInput } from "src/products/dto/product.input";

@InputType()
export class ReservationInput {
    @Field(type => [ProductInput])
    products: ProductInput[];

    @Field()
    amount: number;
}