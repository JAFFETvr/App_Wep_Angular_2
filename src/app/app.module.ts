import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

import { UsersModule } from './users/users.module';
import { ArtistModule } from './artist/artist.module';
import { LoginModule } from './login/login.module';
import { FormsModule } from '@angular/forms';
import { MusicService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { ArtistHeaderComponent } from './artist/artist-header/artist-header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ArtistModule,
    LoginModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [AuthService, MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
