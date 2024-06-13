import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { ItemCompra } from '../../models/itemcompra.models';
import { CompraService } from '../../services/compra/compra.service';
import { ProdutoService } from '../../services/produto/produto.service';

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
    private router: Router,
    private produtoService: ProdutoService
  ) {
  }

  ngOnInit(): void {
    this.carrinho = this.carrinhoService.getCarrinho();
    this.carrinho.forEach( i => this.listids.push(i.produtoId!));
    this.produtoService.listIds(this.listids).subscribe(data => {
      this.produtos = data;
      this.getTotal();
      this.produtos.forEach(element => {

        if(element.img == null || element.img.length == 0){
          element.img! = ['https://placehold.co/220x200/gray/white?text=Produto'];
        }
      });
    });
    console.log(this.carrinho, this.produtos, this.listids, this.total);
  }
  recebe(){
    this.getTotal();
  }

  aumentarQuantidade(produtoId: number): void {
    this.carrinhoService.aumentarQuantidade(produtoId);
    this.getTotal();
  }

  removerDoCarrinho(produtoId: number): void {
    this.carrinhoService.removerProduto(produtoId);
    this.carrinho = this.carrinhoService.getCarrinho();

    window.location.reload();
  }

  getTotal(){
    this.total = 0;
      this.produtos.forEach(element => {
        this.total = this.total + (element.preco! * this.getQuantidade(element.id!));
      });
  }

  getQuantidade(produtoId: number): number {
    return this.carrinhoService.getQuantidade(produtoId);
  }

  diminuirQuantidade(produtoId: number): void {
    this.carrinhoService.diminuirQuantidade(produtoId);
    this.getTotal();
  }

  finalizarCompra(): void {
    this.router.navigate(['/pagamento']);
  }
}
