import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { Usuario } from '../../../../models/usuario.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [MatIconModule, MatButton],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css',
})
export class ListUsuariosComponent {

  constructor(private router: Router, private usuarioService: UsuarioService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.ngOnInit();
  }

  usuarios: Usuario[] = [];

  ngOnInit() {
    this.usuarioService.getAll().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  irParaNewUsuario() {
    this.router.navigate(['/admin/usuarios/new']);
  }
  editar(id:number) {
    this.router.navigate([`/admin/usuarios/edit/${id}`]);
  }

  resetarSenha(id:number, nome:string){
  const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
    width: '250px',
    data: {
      message: `Tem certeza que deseja resetar a senha do usuário de nome: ${nome}?`,
      n: nome
    }});

  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.usuarioService.resetarSenha(id).subscribe({
        next: () => {
          this.snackBar.open('Senha resetada', 'Fechar', {
            duration: 2000,
          });
        },
        error: (error) => {
          this.snackBar.open('Erro ao resetar senha', 'Fechar', {
            duration: 1000,
          });
        }
      });
    }
  });
  }
  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o usuário de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Usuario deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar usuario', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }


}
