import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { PneuService } from '../../../../services/pneu/pneu.service';
import { Pneu } from '../../../../models/pneu.model';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-list-pneus',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-pneus.component.html',
  styleUrl: './list-pneus.component.css'
})
export class ListPneusComponent {

  constructor(private router: Router, private service: PneuService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  pneus: Pneu[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((data: Pneu[]) => {
      this.pneus = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/admin/pneus/edit/${id}`]);
  }

  irParaNewPneu() {
    this.router.navigate(['/admin/pneus/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Pneu de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Pneu deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Pneu', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }

}
