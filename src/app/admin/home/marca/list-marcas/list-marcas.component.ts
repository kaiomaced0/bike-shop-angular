import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MarcaService } from '../../../../services/marca/marca.service';
import { Marca } from '../../../../models/marca.model';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-marcas',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule, MatPaginatorModule],
  templateUrl: './list-marcas.component.html',
  styleUrl: './list-marcas.component.css'
})
export class ListMarcasComponent {


  constructor(private router: Router, private MarcaService: MarcaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.ngOnInit();
  }

  marcas: Marca[] = [];
  pageSize = 10;
  page = 0;
  totalRecords = 0;

  ngOnInit() {
    this.MarcaService.getAllAdmin(this.page, this.pageSize).subscribe((data: Marca[]) => {
      this.marcas = data;
    });
    this.MarcaService.count().subscribe(data => {
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
    this.router.navigate([`/admin/marcas/edit/${id}`]);
  }

  irParaNewMarca() {
    this.router.navigate(['/admin/marcas/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar a Marca de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.MarcaService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Marca deletada', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Marca', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }

}
