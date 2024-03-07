import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatList, MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-card-produto-favorito',
  standalone: true,
  imports: [MatList, MatListItem, MatIcon],
  templateUrl: './card-produto-favorito.component.html',
  styleUrl: './card-produto-favorito.component.css'
})
export class CardProdutoFavoritoComponent {
  @Input() id?: string; // Valor padrão para o id
  @Input() imageUrl?: string;
  @Input() title?: string; // Valor padrão para o título
  @Input() price?: number; // Valor padrão para o preço
  @Input() stars?: number; // Valor padrão para a quantidade de estrelas
  @Input() description?: string;

}
