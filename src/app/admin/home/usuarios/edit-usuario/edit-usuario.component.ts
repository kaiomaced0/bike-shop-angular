import { Component } from '@angular/core';
import { Usuario } from '../../../../models/usuario.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-edit-usuario',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-usuario.component.html',
  styleUrl: './edit-usuario.component.css'
})
export class EditUsuarioComponent {

  usuario: Usuario = new Usuario();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: UsuarioService, private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.usuario = data;
          this.usuario.senha = '';
        },
        error: (error) => {
          console.error('Erro ao buscar usuário', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/usuarios']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarUsuario() {
    this.service.update(this.usuario.id!, this.usuario).subscribe({
      next: () => {
        console.log('Usuário atualizado com sucesso');
        this.router.navigate(['/admin/usuarios']);
        this.snackBar.open('Usuario atualizado', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao atualizar usuário:', erro);
      }
    });
  }
}
