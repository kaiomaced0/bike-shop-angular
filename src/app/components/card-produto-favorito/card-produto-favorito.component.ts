import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-card-produto-favorito',
  standalone: true,
  imports: [MatList, MatListItem],
  templateUrl: './card-produto-favorito.component.html',
  styleUrl: './card-produto-favorito.component.css'
})
export class CardProdutoFavoritoComponent {

}
