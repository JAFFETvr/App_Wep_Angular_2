import { Component } from '@angular/core';

@Component({
  selector: 'app-artist-my-songs',
  templateUrl: './artist-my-songs.component.html',
  styleUrl: './artist-my-songs.component.css'
})
export class ArtistMySongsComponent {
  Mysongs = [1, 2, 3, 4, 5]; // Replace with actual song objects or data as needed

  addToPlaylist(Mysong: number): void {
    console.log(`Song ${Mysong} added to playlist`);
    // Add your logic to actually add the song to the playlist here
  }
}
