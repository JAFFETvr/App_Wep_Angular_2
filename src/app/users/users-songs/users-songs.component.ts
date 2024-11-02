import { Component } from '@angular/core';
import { MusicService } from '../../api.service';

@Component({
  selector: 'app-users-songs',
  templateUrl: './users-songs.component.html',
  styleUrls: ['./users-songs.component.css']
})
export class UsersSongsComponent {
  Mysongs: any[] = [];
  playlists: any[] = []; 
  selectedPlaylistId: number | null = null;
  selectedSong: any | null = null; 

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadSongs();
    this.loadPlaylists();
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

  loadPlaylists(): void {
    this.musicService.getAllListaReproducciones().subscribe(
      (data) => {
        this.playlists = data;
        console.log('Playlists loaded:', this.playlists);
      },
      (error) => {
        console.error('Error loading playlists:', error);
      }
    );
  }

  addToPlaylist(songId: number, playlistId: number): void {
    const data = {
      listaReproduccion_id: playlistId,
      cancion_id: songId
    };
    
    this.musicService.createListaCancion(data).subscribe(
      (response) => {
        console.log(`Canción ${songId} añadida a la lista de reproducción ${playlistId}`, response);
        alert(`Canción añadida exitosamente a la lista de reproducción`);
      },
      (error) => {
        console.error('Error al añadir la canción a la lista de reproducción:', error);
        alert('Ocurrió un error al añadir la canción a la lista de reproducción');
      }
    );
  }

  viewSongDetails(song: any): void {
    this.selectedSong = song; 
  }
}
