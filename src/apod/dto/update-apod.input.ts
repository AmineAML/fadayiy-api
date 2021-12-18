import { CreateApodInput } from './create-apod.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApodInput extends PartialType(CreateApodInput) {
  @Field(() => Int)
  id: number;
}
