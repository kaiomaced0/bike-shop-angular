import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { MarcaService } from '../../../../services/marca/marca.service';
import { MatSelectModule } from '@angular/material/select';
import { Categoria } from '../../../../models/categoria.model';
import { Marca } from '../../../../models/marca.model';

@Component({
  selector: 'app-edit-produto',
  standalone: true,
  imports: [FormsModule, MatButton, MatSelectModule, ReactiveFormsModule],
  templateUrl: './edit-produto.component.html',
  styleUrl: './edit-produto.component.css'
})
export class EditProdutoComponent implements OnInit {


  produto: Produto = new Produto();
  categorias: Categoria[] = [];
  marcas: Marca[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProdutoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog, private categoriaService: CategoriaService, private marcaService: MarcaService
  ) {}

  ngOnInit(): void {
    this.produto.categoriasId = [];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.produto = data;
        },
        error: (error) => {
          console.error('Erro ao buscar produto', error);
        }
      });
    }
    this.categoriaService.getAll().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (erro) => {
        console.error('Erro ao carregar categorias', erro);
      }
    });
    this.marcaService.getAll().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
      },
      error: (erro) => {
        console.error('Erro ao carregar marcas', erro);
      }
    });
    this.produto.categorias?.forEach(element => {
      this.produto.categoriasId?.push(element.id!);
    });
    this.produto.idMarca = this.produto.marca?.id;
  }

  cancelar(){
    this.router.navigate(['/admin/produtos']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarProduto() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar o produto?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.produto.id!, this.produto).subscribe({
            next: () => {
              console.log('Produto atualizado com sucesso');
              this.router.navigate(['/admin/produtos']);
              this.snackBar.open('Produto atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Produto:', erro);
            }
          });
        }


  });}

}
