import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariologadoService } from '../../../../services/usuariologado/usuariologado.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Telefone } from '../../../../models/telefone.models';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-telefones',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './telefones.component.html',
  styleUrl: './telefones.component.css'
})
export class TelefonesComponent implements OnInit {



  constructor(private router: Router, private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  telefones: Telefone[] = [];

  ngOnInit() {
    this.usuarioLogadoService.getTelefones().subscribe((data: Telefone[]) => {
      this.telefones = data;
    });
  }
  delete(id:number, nome:string, numero:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Telefone: ${nome} ${numero}?`,
        n: nome,
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioLogadoService.deleteTelefone(id).subscribe({
          next: () => {
            this.snackBar.open('Telefone deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Telefone', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }


  new() {
    this.router.navigate(['/conta/telefones/add']);
  }
  principal(id:number){

  }
}
