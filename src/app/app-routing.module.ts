import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginnComponent } from './login/loginn/loginn.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';
import { ArtisDasbohardComponent  } from './artist/artis-dasbohard/artis-dasbohard.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginnComponent },
  { path: 'app-users-dashboard', component: UsersDashboardComponent },
  { path: 'app-artist-dashboard', component:ArtisDasbohardComponent },
  { path: '**', redirectTo: '/login' } // Maneja rutas no encontradas
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
