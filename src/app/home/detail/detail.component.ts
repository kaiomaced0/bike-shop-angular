import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
    product = {
    name: 'Bike Adulto',
    price: 100,
    // Inclua outras propriedades necessárias
  };

  changeImage(imageUrl: string): void {
    // Lógica para alterar a imagem principal
    console.log('Mudar imagem principal para:', "bike.jpg");
  }

}
