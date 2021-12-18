import { CreateEpicInput } from './create-epic.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEpicInput extends PartialType(CreateEpicInput) {
  @Field(() => Int)
  id: number;
}
