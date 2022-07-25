
import { ObjectType, Field } from "@nestjs/graphql";
import { GqlUuid } from "src/commons/graphql/uuid.scalar";
import { Product } from "src/products/dto/product.entity";
import { User } from "src/users/dto/users.entity";
import { IUser } from "src/users/interfaces/user.interface";


@ObjectType()
export class Reservation {
    @Field(type => [Product])
    products: Product[];

    @Field()
    amount: number;

    @Field(type => User)
    client: IUser;

    @Field(type => GqlUuid, { nullable: true })
    transactionId: string;
} 