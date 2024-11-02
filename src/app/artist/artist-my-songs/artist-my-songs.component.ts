import { Component } from '@angular/core';
import { MusicService } from '../../api.service';

@Component({
  selector: 'app-artist-my-songs',
  templateUrl: './artist-my-songs.component.html',
  styleUrl: './artist-my-songs.component.css'
})
export class ArtistMySongsComponent {
  Mysongs: any[] = [];
  isEditModalOpen: boolean = false; 
  currentSong: any; 

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadSongs(); 
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

  openEditModal(song: any): void {
    this.currentSong = { ...song }; 
    this.isEditModalOpen = true; 
  }

  closeEditModal(): void {
    this.isEditModalOpen = false; 
  }

  updateSong(): void {
    this.musicService.updateCancion(this.currentSong.id, this.currentSong).subscribe(
      (response) => {
        console.log('Song updated:', response);
        this.loadSongs(); 
        this.closeEditModal(); 
        alert('Song updated successfully');
      },
      (error) => {
        console.error('Error updating song:', error);
        alert('Error updating song');
      }
    );
  }

  deleteSong(songId: number): void {
    if (confirm('Are you sure you want to delete this song?')) {
      this.musicService.deleteCancion(songId).subscribe(
        (response) => {
          console.log('Song deleted:', response);
          this.loadSongs(); 
          alert('Song deleted successfully');
        },
        (error) => {
          console.error('Error deleting song:', error);
          alert('Error deleting song');
        }
      );
    }
  }
}
