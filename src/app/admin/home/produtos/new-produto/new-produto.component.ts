import { Component, OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { Categoria } from '../../../../models/categoria.model';
import { Marca } from '../../../../models/marca.model';
import { MarcaService } from '../../../../services/marca/marca.service';
import { UploadComponent } from '../../../../components/upload/upload/upload.component';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, UploadComponent],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent implements OnInit{

  produto: Produto = new Produto();
  categorias: Categoria[] = [];
  marcas: Marca[] = [];

  cancelar(){
    this.router.navigate(['/admin/produtos']);
  }

  constructor(private router: Router, private service: ProdutoService, private categoriaService: CategoriaService, private marcaService: MarcaService) {

  }
  ngOnInit() {
    this.produto.categoriasId = [];
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
  }
  adicionarProduto() {
    this.produto!.idCor = 1;
    this.produto!.img = [];
    this.service.insert(this.produto!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/admin/produtos']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar produto:', erro, this.produto!);
      }
    });
  }
}
