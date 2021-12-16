import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLaunchInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
