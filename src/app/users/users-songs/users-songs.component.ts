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
  showPlaylistModal: boolean = false;
  songToAdd: number | null = null;

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

  openPlaylistModal(songId: number): void {
    this.songToAdd = songId;
    this.showPlaylistModal = true;
  }

  closePlaylistModal(): void {
    this.showPlaylistModal = false;
    this.selectedPlaylistId = null;
  }

  confirmAddToPlaylist(): void {
    if (this.songToAdd && this.selectedPlaylistId) {
      this.addToPlaylist(this.songToAdd, this.selectedPlaylistId);
      this.closePlaylistModal();
    } else {
      alert('Please select a playlist.');
    }
  }

  addToPlaylist(songId: number, playlistId: number): void {
    const data = {
      listaReproduccion_id: playlistId,
      cancion_id: songId
    };
    
    this.musicService.createListaCancion(data).subscribe(
      (response) => {
        console.log(`Song ${songId} added to playlist ${playlistId}`, response);
        alert('Song successfully added to playlist');
      },
      (error) => {
        console.error('Error adding song to playlist:', error);
        alert('An error occurred while adding the song to the playlist');
      }
    );
  }

  viewSongDetails(song: any): void {
    this.selectedSong = song;
  }
}
