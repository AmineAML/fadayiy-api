import { ObjectType, Field, Int } from '@nestjs/graphql';
// import { Entity, PrimaryGeneratedColumn } from 'typeorm';

// @Entity()
@ObjectType()
export class BingImageSearch {
  // @PrimaryGeneratedColumn()
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // id: number;
  
  @Field({ description: 'Example field (placeholder)' })
  url: string;
}
