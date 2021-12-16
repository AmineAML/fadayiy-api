import { CreateAstronautInput } from './create-astronaut.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAstronautInput extends PartialType(CreateAstronautInput) {
  @Field(() => Int)
  id: number;
}
