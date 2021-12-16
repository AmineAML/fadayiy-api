import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAgencyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
