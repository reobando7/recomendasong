import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  preferences = Array<any>();
  metadata = Array<string>();
  listenImg : string = "/assets/img/listen_music.svg"
  showSong : boolean = false;
  loading : boolean = false;
  song : any;
  spinner : string = "/assets/img/spinner.svg";
  disk : string = "/assets/img/disk.svg";
  
  constructor(private api : ApiService) { }

  ngOnInit(): void {
    this.getPreferences();
  }

  changeCheckbox($event : any, tag : string){
    if($event.target.checked) {
      this.metadata.push(tag.toUpperCase())
    }else if(!$event.target.checked){
      this.metadata = this.metadata.filter(item => item != tag);
    } 
  }

  getPreferences(){
    this.api.getPreferences().subscribe({
      next : (data : any) => {
        console.log(data)
        this.preferences = data;
      },
      error : (error) => {
        console.log(error);
      }
    })
  }

  getSongsMetadataSegment(){
    this.loading = true;
    this.api.getSongsMetadataSegment(this.metadata).subscribe({
      next : (data : any) => {
        console.log(data);
        if(data.code == 200){
          this.song = data.song;
          this.showSong = true;
        }
        this.loading = false;
      },
      error : (error : any) => {
        this.loading = false;
        this.showSong = false;
      }
    })
  }

  outputSong($event:any){
    this.showSong = false;
    this.metadata = [];
  }

}
