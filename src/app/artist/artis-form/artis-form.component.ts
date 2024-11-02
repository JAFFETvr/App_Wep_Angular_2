import { Component } from '@angular/core';
import { MusicService } from '../../api.service';

@Component({
  selector: 'app-artis-form',
  templateUrl: './artis-form.component.html',
  styleUrl: './artis-form.component.css'
})
export class ArtisFormComponent {
  titulo: string = '';
  duracion: number | null = null;
  fecha: string = '';
  album: string = '';
  tipo: string = 'POP'; 
  constructor(private musicService: MusicService) {}

  createSong(): void {
    const songData = {
      titulo: this.titulo,
      duracion: this.duracion,
      fechaLanzamiento: this.fecha, // Asegúrate de que esto no sea nulo
        album: this.album,
        tipo: this.tipo
    };

    console.log('Datos de la canción a enviar:', songData); 

    this.musicService.createCancion(songData).subscribe(
        (response) => {
            console.log('Canción creada:', response);
            alert('Canción agregada exitosamente');
            this.resetForm();
        },
        (error) => {
            console.error('Error al crear la canción:', error);
            alert('Ocurrió un error al agregar la canción');
        }
    );
  }

  resetForm(): void {
    this.titulo = '';
    this.duracion= null;
    this.fecha = '';
    this.album = '';
    this.tipo = 'POP'; 
  }
}
