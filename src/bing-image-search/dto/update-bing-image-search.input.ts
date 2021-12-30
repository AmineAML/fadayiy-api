import { CreateBingImageSearchInput } from './create-bing-image-search.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBingImageSearchInput extends PartialType(CreateBingImageSearchInput) {
  @Field(() => Int)
  id: number;
}
