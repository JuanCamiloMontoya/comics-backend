import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserComic } from "./userComic.entity";

@Entity('user')
export class User {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: Number;

  @Column('character varying')
  email: String;

  @Column('character varying')
  password: String;

  @OneToMany(type => UserComic, UserComic => UserComic.user)
  userComics: UserComic[];
}