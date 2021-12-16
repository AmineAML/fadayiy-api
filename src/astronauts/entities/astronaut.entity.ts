import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Agency } from 'src/agency/entities/agency.entity';
import { Status, Type } from 'src/stations/entities/station.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Astronaut {
  @PrimaryGeneratedColumn()
  @Field(() => Int, { description: 'Example field (placeholder)' })
  id: number;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field({ nullable: true })
  name: string;

  @Field(type => Status, { nullable: true })
  @ManyToOne(type => Status, status => status.id)
  status: Status;

  @Field(type => Type)
  @ManyToOne(type => Type, type => type.id)
  type: Type;

  @Field(type => Agency, { nullable: true })
  @OneToMany(type => Agency, agency => agency.id)
  agency: Agency;

  @Column()
  @Field()
  nationality: string;

  @Column()
  @Field({ nullable: true })
  twitter: string;

  @Column()
  @Field({ nullable: true })
  instagram: string;

  @Column()
  @Field({ nullable: true })
  bio: string;

  @Column()
  @Field({ nullable: true })
  profile_image: string;

  @Column()
  @Field({ nullable: true })
  wiki: string;

  @Column()
  @Field({ nullable: true })
  first_flight: string;

  @Column()
  @Field({ nullable: true })
  last_flight: string;

  @Column()
  @Field({ nullable: true })
  profile_image_thumbnail: string;
}
