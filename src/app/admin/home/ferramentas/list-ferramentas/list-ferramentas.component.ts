import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { FerramentaService } from '../../../../services/ferramenta/ferramenta.service';
import { Ferramenta } from '../../../../models/ferramenta.model';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-ferramentas',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule, MatPaginatorModule],
  templateUrl: './list-ferramentas.component.html',
  styleUrl: './list-ferramentas.component.css'
})
export class ListFerramentasComponent {

  constructor(private router: Router, private service: FerramentaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  ferramentas: Ferramenta[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  ngOnInit() {
    this.service.getAll(this.page, this.pageSize).subscribe((data: Ferramenta[]) => {
      this.ferramentas = data;
    });
  }
  paginar(event: PageEvent): void {
    this.page = event.pageIndex;
    this.pageSize = event.pageSize;
    this.ngOnInit();
  }
  editar(id:number) {
    this.router.navigate([`/admin/ferramentas/edit/${id}`]);
  }

  irParaNewFerramenta() {
    this.router.navigate(['/admin/ferramentas/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar a Ferramenta de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Ferramenta deletada', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Ferramenta', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }

}
