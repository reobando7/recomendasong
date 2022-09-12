import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  constructor(private readonly appService: AppService) {}
  
  @Post('/save/song/multiple')
  saveSongMultiple(@Body() body : any){
    return this.appService.saveSongMultiple(body)
  }

  @Post('/save/song')
  saveSong(@Body() body : any){
    return this.appService.saveSong(body)
  }

  @Post('/segment/songs')
  getSongsMetadataSegment(@Body() body : any){
    return this.appService.getSongsMetadataSegment(body);
  }

}
