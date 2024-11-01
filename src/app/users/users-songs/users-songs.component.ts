import { Component } from '@angular/core';

@Component({
  selector: 'app-users-songs',
  templateUrl: './users-songs.component.html',
  styleUrl: './users-songs.component.css'
})
export class UsersSongsComponent {
  songs = [1, 2, 3, 4, 5]; // Replace with actual song objects or data as needed

  addToPlaylist(song: number): void {
    console.log(`Song ${song} added to playlist`);
    // Add your logic to actually add the song to the playlist here
  }
}
