import { CreateLaunchInput } from './create-launch.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLaunchInput extends PartialType(CreateLaunchInput) {
  @Field(() => Int)
  id: number;
}
