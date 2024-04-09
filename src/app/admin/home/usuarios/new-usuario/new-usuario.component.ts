import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-usuario',
  standalone: true,
  imports: [FormsModule, MatFormField, MatLabel, ReactiveFormsModule, MatButton],
  templateUrl: './new-usuario.component.html',
  styleUrl: './new-usuario.component.css'
})
export class NewUsuarioComponent {
  usuario?: Usuario = new Usuario();
  constructor(private router: Router, private service: UsuarioService, private snackBar: MatSnackBar) {
  }
  cancelar(){
    this.router.navigate(['/admin/usuarios']);
  }
  adicionarUsuario() {
    this.service.insert(this.usuario!).subscribe({
      next: (usuarioadd) => {
        console.log('Usuario adicionado com sucesso:', usuarioadd);
        this.router.navigate(['/admin/usuarios']);
        this.snackBar.open('Usuario adicionado!', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar Usuario:', erro);
        this.snackBar.open('Erro ao adicionar usuario', 'Fechar', {
          duration: 2000,
        });
      }
    });
  }

}
