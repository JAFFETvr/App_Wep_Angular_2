import { Component } from '@angular/core';
import { MusicService } from '../../api.service';
import { forkJoin } from 'rxjs'; // Agrega esta línea


@Component({
  selector: 'app-users-playlist',
  templateUrl: './users-playlist.component.html',
  styleUrls: ['./users-playlist.component.css']
})
export class UsersPlaylistComponent {
  playlists: any[] = []; // Almacena las playlists obtenidas
  editingPlaylist: any = null; // Almacena la playlist que se está editando
  updatedPlaylist: any = { nombre: '', descripcion: '', fecha: '', tipo: '' };
  selectedPlaylistSongs: any[] = []; // Almacena las canciones de la playlist seleccionada

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadPlaylists(); // Cargar playlists al inicializar el componente
  }

  loadPlaylists(): void {
    this.musicService.getAllListaReproducciones().subscribe(
      (data: any) => { // Usa 'any' aquí
        this.playlists = data; // Almacenar los datos recibidos en playlists
        console.log('Playlists obtenidas:', this.playlists);
      },
      (error) => {
        console.error('Error al obtener playlists:', error);
      }
    );
  }

  loadSongsFromPlaylist(playlistId: number): void {
    this.musicService.getSongsFromListaReproduccion(playlistId).subscribe(
      (data: any[]) => { // Usa 'any[]' aquí
        const songIds = data.map((song: any) => song.cancion_id); // Usa 'any' aquí
        this.loadSongDetails(songIds);
      },
      (error) => {
        console.error('Error loading songs from playlist:', error);
      }
    );
  }

  loadSongDetails(songIds: number[]): void {
    const requests = songIds.map(id => this.musicService.getCancion(id));
    forkJoin(requests).subscribe(
      (songs: any[]) => { 
        this.selectedPlaylistSongs = songs; 
        console.log('Detailed songs:', this.selectedPlaylistSongs); 
      },
      (error) => {
        console.error('Error loading song details:', error);
      }
    );
  }

  deletePlaylist(id: number): void {
    this.musicService.deleteListaReproduccion(id).subscribe(
      (response) => {
        console.log('Playlist eliminada:', response);
        this.playlists = this.playlists.filter(playlist => playlist.id !== id); // Elimina la playlist del array local
        alert('Playlist eliminada exitosamente');
      },
      (error) => {
        console.error('Error al eliminar la playlist:', error);
        alert('Ocurrió un error al eliminar la playlist');
      }
    );
  }

  editPlaylist(playlist: any): void {
    this.editingPlaylist = playlist; // Establece la playlist que se va a editar
    this.updatedPlaylist = { ...playlist }; // Copia los datos de la playlist a editar
  }

  saveEdit(): void {
    this.musicService.updateListaReproduccion(this.updatedPlaylist.id, this.updatedPlaylist).subscribe(
      (response) => {
        console.log('Playlist actualizada:', response);
        this.playlists = this.playlists.map(playlist => 
          playlist.id === this.updatedPlaylist.id ? { ...this.updatedPlaylist } : playlist
        );
        this.editingPlaylist = null; // Limpia la playlist en edición
        alert('Playlist actualizada exitosamente');
      },
      (error) => {
        console.error('Error al actualizar la playlist:', error);
        alert('Ocurrió un error al actualizar la playlist');
      }
    );
  }
  
}
