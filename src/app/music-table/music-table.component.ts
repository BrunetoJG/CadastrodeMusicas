import { Component } from '@angular/core';
import { Music } from '../../types/music';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.css'
})
export class MusicTableComponent {

  musics: Music[] = [];

  

}
