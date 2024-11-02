import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface Usuario {
  correo: string;
  password: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuariosRegistrados: Usuario[] = [
    { correo: 'usuario@example.com', password: '12345', rol: 'user' },
    { correo: 'artista@example.com', password: '54321', rol: 'artist' },
  ];

  constructor(private router: Router) {}

  login(correo: string, password: string, rol: string): void {
    // Encuentra un usuario en la lista de usuarios registrados que coincida en correo, contraseña y rol
    const usuarioValido = this.usuariosRegistrados.find(usuario => 
      usuario.correo === correo &&
      usuario.password === password &&
      usuario.rol === rol
    );

    if (usuarioValido) {
      // Redirecciona según el rol del usuario encontrado
      if (usuarioValido.rol === 'user') {
        this.router.navigate(['/app-users-dashboard']);
      } else if (usuarioValido.rol === 'artist') {
        this.router.navigate(['/app-artist-dashboard']);
      }
    } else {
      alert('Credenciales inválidas o rol incorrecto');
    }
  }

  register(correo: string, password: string, rol: string): void {
    const usuarioExistente = this.usuariosRegistrados.find(usuario => usuario.correo === correo);

    if (!usuarioExistente) {
      this.usuariosRegistrados.push({ correo, password, rol });
      alert('Usuario registrado exitosamente.');
    } else {
      alert('El usuario ya está registrado.');
    }
  }
}
