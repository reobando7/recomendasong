import { Injectable } from '@nestjs/common';
import { Song } from './models/song';
import { AppDataSource } from './database/data-source';
import { UtilsService } from './utils/utils.service';

@Injectable()
export class AppService {
  
  constructor(private utilsService : UtilsService){}


  async saveSongMultiple(songs : Array<any>) {
    try {
      for(let song of songs){
        let songEntity = new Song();
        songEntity.artist = song.artistId;
        songEntity.duration = song.duration;
        songEntity.year = song.year;
        songEntity.name = song.name;
        songEntity.url = song.url;
        songEntity.img = song.img;
        songEntity.metadata = song.metadata;

        await AppDataSource.manager.save(songEntity)
      }
    
      return { code : 200, msg : "Success" }

    } catch (error) {
        return { code : 500, error : error.message }
    }
  }

  async saveSong(song : any) {
    try {
        let songEntity = new Song();
        songEntity.artist = song.artistId;
        songEntity.duration = song.duration;
        songEntity.year = song.year;
        songEntity.name = song.name;
        songEntity.metadata = song.metadata;
        songEntity.url = song.url;
        songEntity.img = song.img;

        await AppDataSource.manager.save(songEntity)
        
        return { code : 200, msg : "Success" }
    } catch (error) {
        return { code : 500, error : error.message }
    }
  }

  async getSongsMetadataSegment(body : any){
    try{
        let song = await AppDataSource.getRepository(Song)
        .createQueryBuilder('song')
        .where('song.metadata && ARRAY[:...metadata]', { metadata : body.metadata })
        .leftJoinAndSelect("song.artist", "artist")
        .getMany();
        
        let randomSong = this.utilsService.rangeRandom(0, song.length);

        return { code : 200, msg : "Success", song : song[randomSong] }
                      
    }catch(error){

      return { code : 500, error: error.message }
    
    }
  }

}
