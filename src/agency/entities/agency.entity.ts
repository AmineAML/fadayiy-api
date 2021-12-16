import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
@ObjectType()
export class Agency {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    url: string;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field({ nullable: true })
    featured: boolean;

    @Column()
    @Field({ nullable: true })
    type: string;

    @Column()
    @Field({ nullable: true })
    country: string;

    @Column()
    @Field({ nullable: true })
    abbrev: string;

    @Column()
    @Field({ nullable: true })
    description: string;

    @Column()
    @Field({ nullable: true })
    administrator: string;

    @Column()
    @Field({ nullable: true })
    founding_year: string;

    @Column()
    @Field({ nullable: true })
    launchers: string;

    @Column()
    @Field({ nullable: true })
    spacecraft: string;

    @Column()
    @Field({ nullable: true })
    parent: string;

    @Column()
    @Field(type => Int, { nullable: true })
    total_launch_count: number;

    @Column()
    @Field(type => Int, { nullable: true })
    successful_launches: number;

    @Column()
    @Field(type => Int, { nullable: true })
    consecutive_successful_launches: number;

    @Column()
    @Field(type => Int, { nullable: true })
    failed_launches: number;

    @Column()
    @Field(type => Int, { nullable: true })
    pending_launches: number;

    @Column()
    @Field(type => Int, { nullable: true })
    successful_landings: number;

    @Column()
    @Field(type => Int, { nullable: true })
    failed_landings: number;

    @Column()
    @Field(type => Int, { nullable: true })
    attempted_landings: number;

    @Column()
    @Field(type => Int, { nullable: true })
    consecutive_successful_landings: number;

    @Column()
    @Field({ nullable: true })
    info_url: string;

    @Column()
    @Field({ nullable: true })
    wiki_url: string;

    @Column()
    @Field({ nullable: true })
    logo_url: string;

    @Column()
    @Field({ nullable: true })
    image_url: string;

    @Column()
    @Field({ nullable: true })
    nation_url: string;

    @Column()
    @Field({ nullable: true })
    country_code: string;
}