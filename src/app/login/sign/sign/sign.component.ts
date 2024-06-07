import { Component, OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario.model';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule],
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.css'
})
export class SignComponent implements OnInit {
  usuario: Usuario = new Usuario();

  cancelar(){
    this.router.navigate(['/login']);
  }

  constructor(private router: Router, private service: UsuarioService, private snackBar: MatSnackBar) {

  }
  ngOnInit() {

  }
  add() {

    this.service.insert(this.usuario!).subscribe({
      next: (usuarioAdicionado) => {

        this.snackBar.open('Usuario Cadastrado:', 'Fechar', {
          duration: 2000,
        });
        this.router.navigate(['/login']);
      },
      error: (erro) => {
        this.snackBar.open('Erro ao adicionar usuario', 'Fechar', {
          duration: 2000,
        });
        console.error('Erro ao adicionar usuario:', erro, this.usuario!);
      }
    });
  }
}
