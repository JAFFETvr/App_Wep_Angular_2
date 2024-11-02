import { Component } from '@angular/core';
import { MusicService } from '../../api.service';

@Component({
  selector: 'app-users-playlist',
  templateUrl: './users-playlist.component.html',
  styleUrls: ['./users-playlist.component.css']
})
export class UsersPlaylistComponent {
  playlists: any[] = []; // Almacena las playlists obtenidas
  editingPlaylist: any = null; // Almacena la playlist que se está editando
  updatedPlaylist: any = { nombre: '', descripcion: '', fecha: '', tipo: '' };

  constructor(private musicService: MusicService) {}

  ngOnInit(): void {
    this.loadPlaylists(); // Cargar playlists al inicializar el componente
  }

  loadPlaylists(): void {
    this.musicService.getAllListaReproducciones().subscribe(
      (data) => {
        this.playlists = data; // Almacenar los datos recibidos en playlists
        console.log('Playlists obtenidas:', this.playlists);
      },
      (error) => {
        console.error('Error al obtener playlists:', error);
      }
    );
  }

  addToPlaylist(song: number): void {
    console.log(`Song ${song} added to playlist`);
    // Lógica para agregar la canción a la playlist
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
    this.musicService. updateListaReproduccion(this.updatedPlaylist.id, this.updatedPlaylist).subscribe(
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
