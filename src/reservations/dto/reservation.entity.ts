
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GqlUuid } from "src/commons/graphql/uuid.scalar";
import { Product } from "src/products/dto/product.entity";
import { User } from "src/users/dto/users.entity";
import { IUser } from "src/users/interfaces/user.interface";


@ObjectType()
export class Reservation {
    @ApiProperty({type: Product})

    @Field(type => [Product])
    products: Product[];

    @ApiProperty()

    @Field()
    amount: number;
    
    @ApiProperty({type: User})
    
    @Field(type => User)
    client: IUser;

    @Field(type => GqlUuid, { nullable: true })
    transactionId: string;
} 