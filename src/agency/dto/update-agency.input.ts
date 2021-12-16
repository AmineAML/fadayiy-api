import { CreateAgencyInput } from './create-agency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAgencyInput extends PartialType(CreateAgencyInput) {
  @Field(() => Int)
  id: number;
}
