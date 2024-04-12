import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Categoria } from '../../../../models/categoria.model';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-list-categorias',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-categorias.component.html',
  styleUrl: './list-categorias.component.css'
})
export class ListCategoriasComponent {


  constructor(private router: Router, private service: CategoriaService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  categorias: Categoria[] = [];

  ngOnInit() {
    this.service.getAll().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/admin/categorias/edit/${id}`]);
  }

  irParaNewCategoria() {
    this.router.navigate(['/admin/categorias/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar a Categoria de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Categoria deletada', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Categoria', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }


}
