import { AfterContentChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit, AfterContentChecked {

  @Input() song : any;
  @Output() output = new EventEmitter<boolean>()
  disk : string = "/assets/img/disk.svg";
  youtube : string = "/assets/img/youtube.svg";
  arrowLeft : string = "/assets/img/arrow_left.svg";
  playYoutube : boolean = false;
  urlVideo!: SafeResourceUrl;

  constructor(public sanitizer: DomSanitizer) { }
  
  ngAfterContentChecked(): void {
    this.urlVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.song.url);
  }

  ngOnInit(): void {
  }

  close(){
    this.output.emit(false);
  }

}
