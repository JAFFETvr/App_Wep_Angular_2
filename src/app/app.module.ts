import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsersModule } from './users/users.module';
import { ArtistModule } from './artist/artist.module';

@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ArtistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
