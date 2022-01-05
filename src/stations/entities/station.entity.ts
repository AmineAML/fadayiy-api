import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Agency } from "src/agency/entities/agency.entity";
import { Column, Entity, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Status {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    abbrev: string;

    @Column()
    @Field()
    description: string;
}

@Entity()
@ObjectType()
export class Type {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    name: string;
}

@Entity()
@ObjectType()
export class Station {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    url: string;

    @Column()
    @Field()
    name: string;

    @Field(type => Status, { nullable: true })
    @OneToOne(type => Status, status => status.id)
    status?: Status;

    @Field(type => Type)
    @OneToOne(type => Type, type => type.id)
    type: Type;

    @Column()
    @Field()
    founded: string;

    @Column()
    @Field({ nullable: true })
    deorbited: string;

    @Column()
    @Field(type => Int)
    height: number;

    @Column()
    @Field(type => Int)
    width: number;

    @Column()
    @Field(type => Int)
    mass: number;

    @Column()
    @Field(type => Int)
    volume: number;

    @Column()
    @Field()
    description: string;

    @Column()
    @Field()
    orbit: string;

    @Column()
    @Field({ nullable: true })
    onboard_crew: string;

    @Field(type => [Agency])
    @ManyToMany(type => Agency)
    owners: Agency[];

    // active_expeditions: ActiveEpeditions[];

    // docking_location: DockerLocation[];

    @Column()
    @Field()
    image_url: string;
}
