import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAstronautInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
