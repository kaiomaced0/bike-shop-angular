import { Component, OnInit } from '@angular/core';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Usuario } from '../../../models/usuario.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { ConfiermDialogResetarsenhaComponent } from '../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { pessoateste, UpdateDados } from '../../../models/updatedados.model';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [FormsModule, MatButton, MatSelectModule, ReactiveFormsModule, MatInput],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent implements OnInit {
  usuario?: Usuario = new Usuario();
  udados: UpdateDados = { senhaAtual: '', pessoa: {} as pessoateste };
  upessoa: pessoateste = { nome: '', login: '', email: '', cpf: '', senha: '' };

  constructor(private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog, private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.usuarioLogadoService.getUsuarioLogado().subscribe(
      data => {
        this.usuario = data;
        this.inicializarDados();
      },
      error => {
        console.error('Erro ao carregar dados do usuário', error);
      }
    );
  }

  inicializarDados(): void {
    this.udados.senhaAtual = '';
    this.upessoa.nome = '';
    this.upessoa.login = '';
    this.upessoa.email = '';
    this.upessoa.cpf = '';
    this.upessoa.senha = '';
    this.udados.pessoa = this.upessoa;
  }

  atualizar() {
    this.udados!.senhaAtual! = this.usuario!.senhaAtual!;
    this.upessoa!.nome = this.usuario!.nome;
    this.upessoa!.login = this.usuario!.login;
    this.upessoa!.email = this.usuario!.email;
    this.upessoa!.cpf = this.usuario!.cpf;
    this.upessoa!.dataNascimento = this.usuario!.dataNascimento;
    this.upessoa!.senha = this.usuario!.senha;
    this.udados!.pessoa = this.upessoa!;

    if (this.udados!.senhaAtual!) {
      const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
        width: '250px',
        data: {
          message: `Tem certeza que deseja atualizar seus dados?`,
        }
      });
      dialogRef.afterClosed().subscribe(result => {

        if (result) {
          this.usuarioLogadoService.dadosupdate(this.udados!).subscribe({
            next: () => {
              console.log('Usuario atualizado com sucesso');
              this.router.navigate(['/conta']);
              this.snackBar.open('Dados atualizados', 'Fechar', {
                duration: 3000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Dados:', erro);
              this.snackBar.open('erro ao atualizar dados', 'Fechar', {
                duration: 3000,
              });
            }
          });
        }

      });
    }
    else {
      this.snackBar.open('Informe a senha', 'Fechar', {
        duration: 3000,
      });

    }

  }

  cancelar() {
    this.router.navigate(['/conta']);
  }

}
