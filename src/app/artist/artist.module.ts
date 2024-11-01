import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisFormComponent } from './artis-form/artis-form.component';
import { ArtisDasbohardComponent } from './artis-dasbohard/artis-dasbohard.component';



@NgModule({
  declarations: [
    ArtisFormComponent,
    ArtisDasbohardComponent,

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
