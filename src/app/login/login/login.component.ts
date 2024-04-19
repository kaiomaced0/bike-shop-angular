import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  username: string = '';
  password: string = '';

  login(): void {
  }

  irParaHome(){
    this.router.navigate(['']);

  }
  irParaHomeAdmin(){
    this.router.navigate(['/admin']);

  }

}
