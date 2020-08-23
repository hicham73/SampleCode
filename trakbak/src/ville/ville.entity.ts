import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from "typeorm";
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Ville extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field()
    id: number;                 

    @Column({type: "varchar",  length: 255  })
    @Field()
    nom: string;      

}