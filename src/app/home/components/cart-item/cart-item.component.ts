import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() item: any; // Substitua 'any' pelo tipo de dados do seu item
  @Output() itemChange = new EventEmitter<any>();

  toggleSelection() {
    this.item.selected = !this.item.selected;
    this.itemChange.emit(this.item);
  }

  updateQuantity(change: number) {
    const newQuantity = this.item.quantity + change;
    if (newQuantity > 0) {
      this.item.quantity = newQuantity;
      this.itemChange.emit(this.item);
    }
  }
}
