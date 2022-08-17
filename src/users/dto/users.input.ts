import { Field, InputType, } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
export class UserInput {

  @ApiProperty()

  @Field(type => String, { nullable: true })
  username: string;
  
  @ApiProperty()

  @Field({ nullable: true })
  password: string;
}