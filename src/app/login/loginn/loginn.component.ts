import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginn',
  templateUrl: './loginn.component.html',
  styleUrl: './loginn.component.css'
})
export class LoginnComponent {
  correo: string = '';
  password: string = '';
  rol: string = 'user';

  private usuarios = [
    { correo: 'usuario@.com', password: '123', rol: 'user' },
    { correo: 'artista@.com', password: '456', rol: 'artist' },
  ];

  constructor(private router: Router) {}

  iniciarSesion() {
    const usuarioValido = this.usuarios.find(usuario => 
      usuario.correo === this.correo && 
      usuario.password === this.password && 
      usuario.rol === this.rol
    );

    if (usuarioValido) {
      if (usuarioValido.rol === 'user') {
        this.router.navigate(['/app-users-dashboard']); 
      } else if (usuarioValido.rol === 'artist') {
        this.router.navigate(['/app-artist-dashboard']);
      }
    } else {
      alert('Credenciales inválidas.');
    }
  }
}