import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Song } from "./song";

@Entity()
export class Artist{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    name : string;
    
    @Column()
    lastname : string;
    
    @Column()
    age : number;
    
    @Column()
    artist : string;

    @OneToMany(() => Song, (song)=> song.artist)
    songs : Song[];
}