import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Categoria } from '../../../../models/categoria.model';
import { CategoriaService } from '../../../../services/categoria/categoria.service';

@Component({
  selector: 'app-list-categorias',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-categorias.component.html',
  styleUrl: './list-categorias.component.css'
})
export class ListCategoriasComponent {

  constructor(private router: Router, private service: CategoriaService) {
    this.service.getAll().subscribe((data: Categoria[]) => {
      this.categorias = data;
    });
  }

  categorias?: Categoria[];

  irParaNewCategoria() {
    this.router.navigate(['/admin/categorias/new']);
  }
  editarCategoria(produtoId: number) {
    this.router.navigate(['/admin/categorias/edit']);
  }

  excluirCategoria(produtoId: number) {
    // Lógica para excluir o produto
  }
}
