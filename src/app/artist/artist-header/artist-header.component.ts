import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-header',
  templateUrl: './artist-header.component.html',
  styleUrl: './artist-header.component.css'
})
export class ArtistHeaderComponent {
  constructor(private router: Router) {}

  navigateToCreateSong() {
    this.router.navigate(['/app-artis-form']);
  }

  navigateToViewMySongs() {
    this.router.navigate(['/app-artist-my-songs']);
  }
  cerrar(){
    this.router.navigate(['./'])
  }
}
