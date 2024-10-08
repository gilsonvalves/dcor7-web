import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe(success => {
      if (success) {
        // Verifique no console se este log aparece
        console.log('Login successful, redirecting...');
        // Redireciona para o dashboard após o login bem-sucedido
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Email ou senha inválidos.';
      }
    });
  }
}
