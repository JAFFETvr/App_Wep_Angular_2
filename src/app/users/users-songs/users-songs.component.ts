import { Component } from '@angular/core';
import { MusicService } from '../../api.service';
@Component({
  selector: 'app-users-songs',
  templateUrl: './users-songs.component.html',
  styleUrl: './users-songs.component.css'
})
export class UsersSongsComponent {
  Mysongs: any[] = [];
  

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadSongs(); // Cargar canciones al inicializar el componente
  }

  loadSongs(): void {
    this.musicService.getAllCanciones().subscribe(
      (data) => {
        this.Mysongs = data;
        console.log('Songs loaded:', this.Mysongs);
      },
      (error) => {
        console.error('Error loading songs:', error);
      }
    );
  }

 
}
