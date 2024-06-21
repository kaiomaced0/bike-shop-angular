import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Cupom } from '../../../../models/cupom.model';
import { CupomService } from '../../../../services/cupom/cupom.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-cupons',
  standalone: true,
  imports: [MatIcon, MatButton, MatPaginatorModule],
  templateUrl: './list-cupons.component.html',
  styleUrl: './list-cupons.component.css'
})
export class ListCuponsComponent {

  constructor(private router: Router, private service: CupomService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  cupons: Cupom[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  ngOnInit() {
    this.service.getAll(this.page, this.pageSize).subscribe((data: Cupom[]) => {
      this.cupons = data;
    });
    this.service.count().subscribe(data => {
      this.totalRecords = data;
      console.log(this.totalRecords);
    });
  }
  paginar(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }
  editar(id:number) {
    this.router.navigate([`/admin/cupons/edit/${id}`]);
  }

  irParaNewCupom() {
    this.router.navigate(['/admin/cupons/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar o Cupom de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Cupom deletado', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Cupom', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }

}
