import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.url;

  constructor(private http : HttpClient) { }

  getPreferences(){
    return this.http.get('./assets/api/preferences.json')
  }

  getSongsMetadataSegment(data : Array<string>){
    return this.http.post(`${this.url}/segment/songs`, { metadata : data }, {headers: {'Content-Type': 'application/json'}})
  }
}
