import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Epic {
  @PrimaryGeneratedColumn()
  @Field(() => Float, { description: 'Example field (placeholder)' })
  identifier: number;

  @Column()
  @Field()
  caption: string;

  @Column()
  @Field()
  image: string;

  @Column()
  @Field()
  date: string;

  @Column()
  @Field({ nullable: true })
  url: string;
}
