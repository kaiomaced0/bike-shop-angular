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
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-telefones',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule, MatPaginatorModule],
  templateUrl: './telefones.component.html',
  styleUrl: './telefones.component.css'
})
export class TelefonesComponent implements OnInit {



  constructor(private router: Router, private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  telefones: Telefone[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  ngOnInit() {
    this.usuarioLogadoService.getTelefones(this.page, this.pageSize).subscribe((data: Telefone[]) => {
      this.telefones = data;
    });

    this.usuarioLogadoService.countTelefones().subscribe(data => {
      this.totalRecords = data;
      console.log(this.totalRecords);
    });
  }

  paginar(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }

  delete(id:number, nome:string, numero:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Excluir o Telefone: ${nome} ${numero}?`,
        n: nome,
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.usuarioLogadoService.deleteTelefone(id).subscribe({
          next: () => {
            this.snackBar.open('Telefone excluido', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao excluir Telefone', 'Fechar', {
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
