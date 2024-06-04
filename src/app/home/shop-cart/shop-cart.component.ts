import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { FormsModule } from '@angular/forms';
import { UsuariologadoService } from '../../services/usuariologado/usuariologado.service';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { ItemCompra } from '../../models/itemcompra.models';
import { CompraService } from '../../services/compra/compra.service';
import { ProdutoService } from '../../services/produto/produto.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})
export class ShopCartComponent implements OnInit {

  carrinho: ItemCompra[] = [];
  produtos: Produto[] = [];
  listids: number[] = [];
  total: number = 0;

  constructor(
    private carrinhoService: CarrinhoService,
    private compraService: CompraService,
    private router: Router,
    private produtoService: ProdutoService
  ) { }

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.getCarrinho();
    this.carrinho.forEach( i => this.listids.push(i.produtoId!));
    this.produtoService.listIds(this.listids).subscribe(data => {
      this.produtos = data;
    });
    this.getTotal();

    console.log(this.carrinho, this.produtos, this.listids, this.total);
  }

  adicionarProduto(produtoId: number): void {
      this.carrinhoService.adicionarProduto(produtoId);
      this.getTotal();
  }

  aumentarQuantidade(produtoId: number): void {
    this.carrinhoService.aumentarQuantidade(produtoId);
  }

  removerDoCarrinho(produtoId: number): void {
    this.carrinhoService.removerProduto(produtoId);
    this.carrinho = this.carrinhoService.getCarrinho();
    this.getTotal();

    window.location.reload();
  }

  getQuantidade(produtoId: number): number {
    return this.carrinhoService.getQuantidade(produtoId);
  }

  getTotal(){
        this.total = 0;
          this.produtos.forEach(element => {
            this.total = this.total + (element.preco! * this.getQuantidade(element.id!));
          });
  }


  diminuirQuantidade(produtoId: number): void {
    this.carrinhoService.diminuirQuantidade(produtoId);
  }

  finalizarCompra(): void {
    const compra = this.carrinhoService.enviarCompra(100, 100);
    this.compraService.enviarCompra(compra).subscribe(() => {
      this.router.navigate(['/finalizar-compra']);
    });
  }
}
