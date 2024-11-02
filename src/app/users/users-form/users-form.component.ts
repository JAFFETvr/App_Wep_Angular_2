import { Component } from '@angular/core';
import { MusicService } from '../../api.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent {
  playlistData = {
    nombre: '',
    descripcion: '',
    fecha: '', 
    tipo: ''
  };

  constructor(private musicService: MusicService) {}

  onCreatePlaylist(): void {
    // Validar que los datos se están enviando correctamente
    console.log('Datos a enviar:', this.playlistData);

    // No es necesario volver a asignar la fecha
    // this.playlistData.fecha = this.playlistData.fecha;

    this.musicService.createListaReproduccion(this.playlistData).subscribe(
      response => {
        console.log('Playlist creada:', response);
        alert('Playlist creada exitosamente');
        // Reiniciar los datos del formulario
        this.playlistData = { nombre: '', descripcion: '', fecha: '', tipo: '' };
      },
      error => {
        console.error('Error al crear la playlist:', error);
        alert('Ocurrió un error al crear la playlist');
      }
    );
  }
}
