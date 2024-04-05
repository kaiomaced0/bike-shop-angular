import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../../models/usuario.model';
import { UsuarioService } from '../../../../services/usuario/usuario.service';

@Component({
  selector: 'app-new-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-usuario.component.html',
  styleUrl: './new-usuario.component.css'
})
export class NewUsuarioComponent {
  usuario?: Usuario = new Usuario();

  constructor(private router: Router, private service: UsuarioService) {}
  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }
  adicionarUsuario() {
    this.service.insert(this.usuario!).subscribe({
      next: (usuarioadd) => {
        console.log('Usuario adicionado com sucesso:', usuarioadd);
        this.router.navigate(['/admin/usuarios']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar Usuario:', erro);
        // Trate erros, como exibir uma mensagem para o usuário
      }
    });
  }
}
