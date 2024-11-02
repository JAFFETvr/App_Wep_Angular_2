import { Component } from '@angular/core';
import { MusicService } from '../../api.service';

@Component({
  selector: 'app-artist-my-songs',
  templateUrl: './artist-my-songs.component.html',
  styleUrl: './artist-my-songs.component.css'
})
export class ArtistMySongsComponent {
  Mysongs: any[] = [];
  isEditModalOpen: boolean = false; // Controla la visibilidad del modal
  currentSong: any; // Mantiene la canción que se está editando

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

  openEditModal(song: any): void {
    this.currentSong = { ...song }; // Crear una copia de la canción para editar
    this.isEditModalOpen = true; // Abrir el modal
  }

  closeEditModal(): void {
    this.isEditModalOpen = false; // Cerrar el modal
  }

  updateSong(): void {
    this.musicService.updateCancion(this.currentSong.id, this.currentSong).subscribe(
      (response) => {
        console.log('Song updated:', response);
        this.loadSongs(); // Recargar las canciones después de actualizar
        this.closeEditModal(); // Cerrar el modal
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
          this.loadSongs(); // Recargar las canciones después de eliminar
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
