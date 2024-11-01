import { Component } from '@angular/core';

@Component({
  selector: 'app-users-playlist',
  templateUrl: './users-playlist.component.html',
  styleUrl: './users-playlist.component.css'
})
export class UsersPlaylistComponent {
 songs = [1, 2, 3, 4, 5]; // Replace with actual song objects or data as needed

  addToPlaylist(song: number): void {
    console.log(`Song ${song} added to playlist`);
    // Add your logic to actually add the song to the playlist here
  }
}
