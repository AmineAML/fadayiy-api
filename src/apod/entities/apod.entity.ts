import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Apod {
  @PrimaryGeneratedColumn()
  @Field(() => Int, {
    description: 'Example field (placeholder)',
    // External API does also return responses without an ID
    nullable: true,
  })
  id: number;

  @Column()
  @Field()
  date: string;

  @Column()
  @Field()
  explanation: string;

  @Column()
  @Field()
  hdurl: string;

  @Column()
  @Field()
  media_type: string;

  @Column()
  @Field()
  service_version: string;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field({ nullable: true })
  copyright: string;
}
