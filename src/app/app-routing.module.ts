import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnComponent } from './login/loginn/loginn.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { ArtisDasbohardComponent  } from './artist/artis-dasbohard/artis-dasbohard.component';
import { ArtisFormComponent } from './artist/artis-form/artis-form.component';
import { ArtistMySongsComponent } from './artist/artist-my-songs/artist-my-songs.component';
import { UsersFormComponent } from './users/users-form/users-form.component';
import { UsersPlaylistComponent } from './users/users-playlist/users-playlist.component';
import { UsersSongsComponent } from './users/users-songs/users-songs.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginnComponent },
  { path: 'app-users-dashboard', component: UsersDashboardComponent },
  { path: 'app-artist-dashboard', component:ArtisDasbohardComponent },
  { path: 'app-artis-form', component: ArtisFormComponent },
  { path: 'app-users-form', component: UsersFormComponent },
  { path: 'app-users-playlist', component: UsersPlaylistComponent },
  { path: 'app-users-songs', component: UsersSongsComponent },
  { path: 'app-artist-my-songs', component: ArtistMySongsComponent },
  { path: '**', redirectTo: '/login' } // Maneja rutas no encontradas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
