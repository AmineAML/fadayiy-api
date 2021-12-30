import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBingImageSearchInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
