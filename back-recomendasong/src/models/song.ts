import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Artist } from "./artist";

@Entity()
export class Song{
    
    @PrimaryGeneratedColumn()
    id : number;

    @ManyToOne(() => Artist, (artist) => artist.songs)
    artist : Artist;

    @Column({
        length : 30
    })
    name : string;
    
    @Column({
        length : 30
    })
    duration : string;
    
    @Column()
	year : number;

    @Column("text", { array: true, default: "{}" }  )
    metadata : string[];

    @Column({
        length : 200
    })
    url : string;

    @Column()
    img : string;


}