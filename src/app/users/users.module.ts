import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UsersPlaylistComponent } from './users-playlist/users-playlist.component';



@NgModule({
  declarations: [
    UsersFormComponent,
    UsersDashboardComponent,
    UserHeaderComponent,
    UsersPlaylistComponent
  ],
  imports: [
    CommonModule
  ] ,
  exports : [
    UsersFormComponent,
    UsersDashboardComponent
  ]
})
export class UsersModule { }
