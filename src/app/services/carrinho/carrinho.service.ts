import { Injectable } from '@angular/core';
import { ItemCompra } from '../../models/itemcompra.models';
import { CompraItemCompra } from '../../models/compraitemcompra.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CompraService } from '../compra/compra.service';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private listid?: number[];
  private cartKey = 'cart';
  private carrinho: ItemCompra[] = [];
  private produtos: Produto[] = [];
  private total: number = 0;

  constructor(
    private produtoService: ProdutoService,
    private snackBar: MatSnackBar) {
    this.loadCart();
  }

  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.carrinho));
    this.loadCart();
  }

  private loadCart(): void {
    const cart = localStorage.getItem(this.cartKey);
    if (cart) {
      this.carrinho = JSON.parse(cart);
    }
  }

  getTotal(produtos: Produto[]) : number{
      this.produtos.forEach(element => {
        this.total = this.total + (element.preco! * this.getQuantidade(element.id!));
      });
    return this.total;
  }



  adicionarProduto(produtoId: number): void {
    this.loadCart();
    const item = this.carrinho.find(p => p.produtoId === produtoId);
    if (item) {
      item.quantidade!++;
    } else {
      this.carrinho.push({ produtoId, quantidade: 1 });
    }
    this.saveCart();

    console.log("Produto comprado:", produtoId);
    this.snackBar.open('Produto adicionado ao carrinho', 'Fechar', {
      duration: 2000,
    });

    this.loadCart();
  }

  aumentarQuantidade(produtoId: number): void {
    this.loadCart();
    const item = this.carrinho.find(p => p.produtoId === produtoId);
    if (item) {
      item.quantidade!++;
    }
    this.saveCart();
  }

  diminuirQuantidade(produtoId: number): void {
    this.loadCart();
    const item = this.carrinho.find(p => p.produtoId === produtoId);
    if (item && item.quantidade! > 0) {
      item.quantidade!--;
      if (item.quantidade === 0) {
        this.removerProduto(produtoId);
      } else {
        this.saveCart();
      }
    }
  }

  removerProduto(produtoId: number): void {
    this.loadCart();
    this.carrinho = this.carrinho.filter(p => p.produtoId !== produtoId);
    this.saveCart();
    window.location.reload();
  }

  getQuantidade(produtoId: number): number {
    this.loadCart();
    const item = this.carrinho.find(p => p.produtoId === produtoId);
    if (item) {
      return item.quantidade!;
    }
    else{
      return 0;
    }
  }

  getCarrinho(): ItemCompra[] {
    this.loadCart();
    return this.carrinho;
  }

  limparCarrinho(): void {
    this.carrinho = [];
    this.saveCart();
  }

  enviarCompra(idCupom?: string, idEndereco?: number): CompraItemCompra {
    this.loadCart();
    const compra: CompraItemCompra = {
      listaItemCompra: this.carrinho,
      idCupom: idCupom,
      idEndereco: idEndereco,
      formaPagamento: 1
    };
    // this.compraService.insert(compra);
    return compra;
  }
}
