import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrl: './user-header.component.css'
})
export class UserHeaderComponent {
  constructor(private router: Router) {}

  navigateToCreatePlaylist() {
    this.router.navigate(['/app-users-form']);
  }

  navigateToMyPlaylist() {
    this.router.navigate(['/app-users-playlist']);
  }

  navigateToSongs() {
    this.router.navigate(['/app-users-songs']);
  }
}
