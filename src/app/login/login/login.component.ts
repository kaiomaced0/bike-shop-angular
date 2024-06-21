import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MatIcon, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router, private auth: AuthService) {}

  username: string = '';
  password: string = '';

  login() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.irParaHome();
      },
      error: (error) => {
        console.error('Erro ao fazer login', error);
      }
    });
  }
  irParaHome(){
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  irParaHomeAdmin(){
    this.router.navigate(['/admin']);

  }
  irCadastro(){
    this.router.navigate(['/login/sign']);

  }

}
