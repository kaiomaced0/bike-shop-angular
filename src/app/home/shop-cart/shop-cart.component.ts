import { Component, OnInit } from '@angular/core';
import { CartItemComponent } from '../components/cart-item/cart-item.component';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';
import { CartService } from '../../services/cart/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop-cart',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './shop-cart.component.html',
  styleUrls: ['./shop-cart.component.css'],
})
export class ShopCartComponent implements OnInit {

  cart?: Produto;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCartItems();
  }

  addToCart(produto: Produto) {
    this.cartService.addToCart(produto, 1);
    this.loadCart();
  }

  removeFromCart(produtoId: number) {
    this.cartService.removeFromCart(produtoId);
    this.loadCart();
  }

  updateQuantity(produtoId: number, quantity: number) {
    this.cartService.updateQuantity(produtoId, quantity);
    this.loadCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart();
  }

  proceedToCheckout() {
    this.router.navigate(['/finalizar-compra']);
  }

//   constructor(private router: Router, private service: UsuariologadoService) {
//     this.calculateTotal();
//   }

//   produtos: Produto[] = [];

//   ngOnInit() {
//     localStorage.getItem('produtos-carrinho');
//   }

//   item1 = { name: 'Produto 1', imageUrl: 'https://via.placeholder.com/220x250', quantity: 1, price: 100, selected: true };
//   item2 = { name: 'Produto 2', imageUrl: 'https://via.placeholder.com/220x250', quantity: 1, price: 150, selected: true };
//   item3 = { name: 'Produto 3', imageUrl: 'https://via.placeholder.com/220x250', quantity: 1, price: 1220, selected: true };

//   total = 0;

//   increaseQuantity(itemNumber: number) {
//     if (itemNumber === 1) {
//       this.item1.quantity++;
//     } else if (itemNumber === 2) {
//       this.item2.quantity++;
//     } else if (itemNumber === 3) {
//       this.item3.quantity++;
//     }
//     this.calculateTotal();
//   }

//   decreaseQuantity(itemNumber: number) {
//     if (itemNumber === 1 && this.item1.quantity > 1) {
//       this.item1.quantity--;
//     } else if (itemNumber === 2 && this.item2.quantity > 1) {
//       this.item2.quantity--;
//     } else if (itemNumber === 3 && this.item3.quantity > 1) {
//       this.item3.quantity--;
//     }
//     this.calculateTotal();
//   }

//   calculateTotal() {
//     this.total = 0;
//     if (this.item1.selected) {
//       this.total += this.item1.quantity * this.item1.price;
//     }
//     if (this.item2.selected) {
//       this.total += this.item2.quantity * this.item2.price;
//     }
//     if (this.item3.selected) {
//       this.total += this.item3.quantity * this.item3.price;
//     }
//   }
}
