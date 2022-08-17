import { Field, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
export class User {

    @ApiProperty()

    @Field(type => String, { nullable: true })
    username: string;


    @Field({ nullable: true })
    password: string;
}