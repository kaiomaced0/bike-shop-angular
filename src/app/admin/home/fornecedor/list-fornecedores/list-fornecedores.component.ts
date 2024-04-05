import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-fornecedores',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-fornecedores.component.html',
  styleUrl: './list-fornecedores.component.css'
})
export class ListFornecedoresComponent {


  constructor(private router: Router) {
  }

  fornecedors = [
    { id: 1, nome: 'fornecedor 1', preco: 100.00, categoria: 'Categoria A', quantidadeEstoque: 10, imageUrl: "https://via.placeholder.com/220x250?text=fornecedor+1" },
    { id: 2, nome: 'fornecedor 2', preco: 200.00, categoria: 'Categoria B', quantidadeEstoque: 20,
    imageUrl: "https://via.placeholder.com/220x250?text=fornecedor+1"},
    // Adicione mais fornecedors conforme necessário
  ];

  irParaNewfornecedor() {
    this.router.navigate(['/admin/fornecedors/new']);
  }
  editarfornecedor(fornecedorId: number) {
    this.router.navigate(['/admin/fornecedors/edit']);
  }

  excluirfornecedor(fornecedorId: number) {
    // Lógica para excluir o fornecedor
  }

}
