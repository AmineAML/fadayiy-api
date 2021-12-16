import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from 'src/stations/entities/station.entity';
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Launch {
  @PrimaryGeneratedColumn()
  @Field(type => Int)
  id: number;

  @Column()
  @Field()
  slug: string;

  @Column()
  @Field()
  name: string;

  @Field(type => Status, { nullable: true })
  @ManyToOne(type => Status, status => status.id)
  status: Status;

  @Column()
  @Field()
  last_updated: string;

  @Column()
  @Field({ nullable: true })
  net: string;

  @Column()
  @Field({ nullable: true })
  window_end: string;

  @Column()
  @Field({ nullable: true })
  window_start: string;

  @Column()
  @Field({ nullable: true })
  infoURLs: string;

  @Column()
  @Field({ nullable: true })
  vidURLs: string;

  @Column()
  @Field({ nullable: true })
  webcast_live: string;

  @Column()
  @Field({ nullable: true })
  image: string;

  @Column()
  @Field({ nullable: true })
  infographic: string;
}
