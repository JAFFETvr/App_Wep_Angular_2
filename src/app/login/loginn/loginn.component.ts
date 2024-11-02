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

  nuevoCorreo: string = '';
  nuevoPassword: string = '';
  nuevoRol: string = 'user';
  mostrarRegistro: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  iniciarSesion() {
    this.authService.login(this.correo, this.password, this.rol);
  }

  toggleRegistro() {
    this.mostrarRegistro = !this.mostrarRegistro;
  }

  registrarUsuario() {
    if (this.nuevoCorreo && this.nuevoPassword && this.nuevoRol) {
      this.authService.register(this.nuevoCorreo, this.nuevoPassword, this.nuevoRol);
      this.nuevoCorreo = '';
      this.nuevoPassword = '';
      this.nuevoRol = 'user';
      this.mostrarRegistro = false; 
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }
}
