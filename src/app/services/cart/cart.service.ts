import { Injectable } from '@angular/core';
import { Produto } from '../../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartKey = 'cart';

  constructor() {}

  private saveCart(cart: any) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  private getCart() {
    const cart = localStorage.getItem(this.cartKey);
    return cart ? JSON.parse(cart) : { items: [], totalPrice: 0 };
  }

  addToCart(produto: Produto, quantity: number) {
    const cart = this.getCart();
    const index = cart.items.findIndex((item: any) => item.produto.id === produto.id);

    if (index > -1) {
      cart.items[index].quantity += quantity;
    } else {
      cart.items.push({ produto, quantity });
    }

    cart.totalPrice = this.calculateTotalPrice(cart.items);
    this.saveCart(cart);
  }

  removeFromCart(produtoId: number) {
    const cart = this.getCart();
    cart.items = cart.items.filter((item: any) => item.produto.id !== produtoId);
    cart.totalPrice = this.calculateTotalPrice(cart.items);
    this.saveCart(cart);
  }

  updateQuantity(produtoId: number, quantity: number) {
    const cart = this.getCart();
    const index = cart.items.findIndex((item: any) => item.produto.id === produtoId);

    if (index > -1) {
      cart.items[index].quantity = quantity;
      cart.totalPrice = this.calculateTotalPrice(cart.items);
      this.saveCart(cart);
    }
  }

  clearCart() {
    this.saveCart({ items: [], totalPrice: 0 });
  }

  getCartItems() {
    return this.getCart();
  }

  private calculateTotalPrice(items: any[]) {
    return items.reduce((total, item) => total + item.produto.preco * item.quantity, 0);
  }
}
