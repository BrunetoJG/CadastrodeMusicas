import { Component, OnInit } from '@angular/core';
import { Music } from '../../types/music';
import { musicsService } from '../../services/music.service';

@Component({
  selector: 'app-music-table',
  templateUrl: './music-table.component.html',
  styleUrl: './music-table.component.css'
})
export class MusicTableComponent implements OnInit{
delete(_t16: Music) {
throw new Error('Method not implemented.');
}

  musics: Music[] = [
    
  ];

  constructor(private service: musicsService){};

  ngOnInit(): void {
    this.loadmusics();
  }

 
loadmusics(){
  this.service.getMusics().subscribe({
    next: data => this.musics = data
  });
}  

}
