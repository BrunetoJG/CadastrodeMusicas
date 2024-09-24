import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Music } from "../types/music";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class musicsService {
    constructor(private http:HttpClient) { }
  
    getMusics(): Observable<Array<Music>> {
      return this.http.get<Array<Music>>('http://localhost:3000/musics')
    }

    delete(music: Music): Observable<void> {
      return this.http.delete<void>(`http://localhost:3000/musics/${music.id}`);
    }
}