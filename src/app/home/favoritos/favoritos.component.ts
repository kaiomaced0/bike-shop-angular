import { Component } from '@angular/core';
import { MatList, MatListItem } from '@angular/material/list';
import { CardProdutoFavoritoComponent } from '../../components/card-produto-favorito/card-produto-favorito.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [MatList, MatListItem, CardProdutoFavoritoComponent],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
    favorites = [
      {
      },
    ];


}
