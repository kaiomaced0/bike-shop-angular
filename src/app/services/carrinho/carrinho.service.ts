import { Injectable } from '@angular/core';
import { ItemCompra } from '../../models/itemcompra.models';
import { CompraItemCompra } from '../../models/compraitemcompra.models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private cartKey = 'cart';
  private carrinho: ItemCompra[] = [];

  constructor(
    private snackBar: MatSnackBar) {
    this.loadCart();
  }

  private saveCart(): void {
    localStorage.setItem(this.cartKey, JSON.stringify(this.carrinho));
  }

  private loadCart(): void {
    const cart = localStorage.getItem(this.cartKey);
    if (cart) {
      this.carrinho = JSON.parse(cart);
    }
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

  enviarCompra(idCupom?: number, idEndereco?: number): CompraItemCompra {
    const compra: CompraItemCompra = {
      listaIemCompra: this.carrinho,
      idCupom: idCupom,
      idEndereco: idEndereco,
      formaPagamento: 1
    };
    this.limparCarrinho();
    return compra;
  }
}
