import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisFormComponent } from './artis-form/artis-form.component';
import { ArtisDasbohardComponent } from './artis-dasbohard/artis-dasbohard.component';
import { ArtistHeaderComponent } from './artist-header/artist-header.component';
import { ArtistMySongsComponent } from './artist-my-songs/artist-my-songs.component';



@NgModule({
  declarations: [
    ArtisFormComponent,
    ArtisDasbohardComponent,
    ArtistHeaderComponent,
    ArtistMySongsComponent,

  ],
  imports: [
    CommonModule
  ],
  exports : [
    ArtisFormComponent,
    ArtisDasbohardComponent,
  ]
})
export class ArtistModule { }
