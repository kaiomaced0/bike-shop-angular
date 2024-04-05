import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Produto } from '../../../../models/produto.model';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../../../../services/produto/produto.service';

@Component({
  selector: 'app-list-produtos',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-produtos.component.html',
  styleUrl: './list-produtos.component.css'
})
export class ListProdutosComponent {

  constructor(private router: Router, private produtoService: ProdutoService) {
  }

  produtos: Produto[] = [];

  ngOnInit() {
    this.produtoService.list().subscribe((data: Produto[]) => {
      this.produtos = data;
    });
  }

  irParaNewProduto() {
    this.router.navigate(['/admin/produtos/new']);
  }
  editarProduto(produtoId: number) {
    this.router.navigate(['/admin/produtos/edit']);
  }

  excluirProduto(produtoId: number) {
    this.produtoService.delete(produtoId);
  }

}
