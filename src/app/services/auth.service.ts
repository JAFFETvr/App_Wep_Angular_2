import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  login(correo: string, password: string, rol: string): void {
    // Lógica simple de validación de credenciales
    const isValidUser = (correo === 'usuario@example.com' && password === '12345');
    const isValidArtist = (correo === 'artista@example.com' && password === '54321');

    if (rol === 'user' && isValidUser) {
      this.router.navigate(['/app-users-dashboard']);
    } else if (rol === 'artist' && isValidArtist) {
      this.router.navigate(['/app-artists-dashboard']);
    } else {
      alert('Credenciales inválidas o rol incorrecto');
    }
  }
}
