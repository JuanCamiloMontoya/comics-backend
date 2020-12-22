import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { UserComic } from "./userComic.entity";

@Entity('comic')
export class Comic {

  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: Number;

  @Column('character varying', { unique: true })
  title: String;

  @Column('text')
  description: String;

  @Column('varchar', { name: 'image_url', length: 300 })
  imageUrl: String;

  @OneToMany(type => UserComic, UserComic => UserComic.comic)
  userComics: UserComic[];
}