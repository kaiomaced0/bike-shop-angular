import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FreioService } from '../../../../services/freio/freio.service';
import { Freio } from '../../../../models/freio.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-list-freios',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-freios.component.html',
  styleUrl: './list-freios.component.css'
})
export class ListFreiosComponent {


  constructor(private router: Router, private freioService: FreioService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  freios: Freio[] = [];

  ngOnInit() {
    this.freioService.getAll().subscribe((data: Freio[]) => {
      this.freios = data;
    });
  }

  irParaNewFreio() {
    this.router.navigate(['/admin/freios/new']);
  }
  editar(id:number) {
    this.router.navigate([`/admin/freios/edit/${id}`]);
  }



  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Freio de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.freioService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Freio deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Freio', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }
}
