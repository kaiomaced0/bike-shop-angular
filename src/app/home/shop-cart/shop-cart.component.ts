import { Component } from '@angular/core';
import { CartItemComponent } from '../components/cart-item/cart-item.component';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [],
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})
export class ShopCartComponent {
  item1 = { name: 'Produto 1', imageUrl: 'https://via.placeholder.com/220x250', quantity: 1, price: 100, selected: true };
  item2 = { name: 'Produto 2', imageUrl: 'https://via.placeholder.com/220x250', quantity: 1, price: 150, selected: true };
  item3 = { name: 'Produto 3', imageUrl: 'https://via.placeholder.com/220x250', quantity: 1, price: 1220, selected: true };

  total = 0;

  constructor() {
    this.calculateTotal();
  }

  increaseQuantity(itemNumber: number) {
    if (itemNumber === 1) {
      this.item1.quantity++;
    } else if (itemNumber === 2) {
      this.item2.quantity++;
    } else if (itemNumber === 3) {
      this.item3.quantity++;
    }
    this.calculateTotal();
  }

  decreaseQuantity(itemNumber: number) {
    if (itemNumber === 1 && this.item1.quantity > 1) {
      this.item1.quantity--;
    } else if (itemNumber === 2 && this.item2.quantity > 1) {
      this.item2.quantity--;
    } else if (itemNumber === 3 && this.item3.quantity > 1) {
      this.item3.quantity--;
    }
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 0;
    if (this.item1.selected) {
      this.total += this.item1.quantity * this.item1.price;
    }
    if (this.item2.selected) {
      this.total += this.item2.quantity * this.item2.price;
    }
    if (this.item3.selected) {
      this.total += this.item3.quantity * this.item3.price;
    }
  }
}
