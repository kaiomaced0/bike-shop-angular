import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-produtos',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-produtos.component.html',
  styleUrl: './list-produtos.component.css'
})
export class ListProdutosComponent {
  constructor(private router: Router) {}

  produtos = [
    { id: 1, nome: 'Produto 1', preco: 100.00, categoria: 'Categoria A', quantidadeEstoque: 10, imageUrl: "https://via.placeholder.com/220x250?text=Produto+1" },
    { id: 2, nome: 'Produto 2', preco: 200.00, categoria: 'Categoria B', quantidadeEstoque: 20,
    imageUrl: "https://via.placeholder.com/220x250?text=Produto+1"},
    // Adicione mais produtos conforme necessário
  ];

  irParaNewProduto() {
    this.router.navigate(['/admin/produtos/new']);
  }
  editarProduto(produtoId: number) {
    this.router.navigate(['/admin/produtos/edit']);
  }

  excluirProduto(produtoId: number) {
    // Lógica para excluir o produto
  }

}
