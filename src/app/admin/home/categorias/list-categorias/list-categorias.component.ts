import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-categorias',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-categorias.component.html',
  styleUrl: './list-categorias.component.css'
})
export class ListCategoriasComponent {
  constructor(private router: Router) {}

  categorias = [
    {"id": 1, "nome": "categoria1", "produtos": 15},
    {"id": 2, "nome": "categoria2", "produtos": 23},
    {"id": 3, "nome": "categoria3", "produtos": 10},
    {"id": 4, "nome": "categoria4", "produtos": 45},
    {"id": 5, "nome": "categoria5", "produtos": 1},
  ]
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
