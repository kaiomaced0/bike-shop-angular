import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Categoria } from '../../../../models/categoria.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-edit-categoria',
  standalone: true,
  imports: [MatButton, FormsModule],
  templateUrl: './edit-categoria.component.html',
  styleUrl: './edit-categoria.component.css'
})
export class EditCategoriaComponent {


  categoria: Categoria = new Categoria();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CategoriaService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.categoria = data;
        },
        error: (error) => {
          console.error('Erro ao buscar Categoria', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/categorias']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarCategoria() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar a Categoria?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.categoria.id!, this.categoria).subscribe({
            next: () => {
              console.log('Categoria atualizado com sucesso');
              this.router.navigate(['/admin/categorias']);
              this.snackBar.open('Categoria atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Categoria:', erro);
            }
          });
        }


  });}



}
