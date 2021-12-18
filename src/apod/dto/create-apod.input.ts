import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateApodInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
