import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardProdutoComponent } from '../../components/card-produto/card-produto.component';
import { CarroselHomeComponent } from '../../components/carrosel-home/carrosel-home.component';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, CarroselHomeComponent, MatFormField],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produtos = [
    {
      "id": "1",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+1",
      "title": "Produto 1",
      "price": 711.99,
      "stars": 4
    },
    {
      "id": "2",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+2",
      "title": "Produto 2",
      "price": 420.15,
      "stars": 4
    },
    {
      "id": "3",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+3",
      "title": "Produto 3",
      "price": 169.81,
      "stars": 4
    },
    {
      "id": "4",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+4",
      "title": "Produto 4",
      "price": 281.8,
      "stars": 3
    },
    {
      "id": "5",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+5",
      "title": "Produto 5",
      "price": 555.55,
      "stars": 5
    },
    {
      "id": "6",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+6",
      "title": "Produto 6",
      "price": 199.99,
      "stars": 4
    },
    {
      "id": "7",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+7",
      "title": "Produto 7",
      "price": 899.49,
      "stars": 5
    },
    {
      "id": "8",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+8",
      "title": "Produto 8",
      "price": 315.25,
      "stars": 3
    },
    {
      "id": "9",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+9",
      "title": "Produto 9",
      "price": 649.99,
      "stars": 4
    },
    {
      "id": "10",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+10",
      "title": "Produto 10",
      "price": 134.75,
      "stars": 3
    },
    {
      "id": "11",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+11",
      "title": "Produto 11",
      "price": 799.95,
      "stars": 5
    },
    {
      "id": "12",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+12",
      "title": "Produto 12",
      "price": 275.49,
      "stars": 4
    },
    {
      "id": "13",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+13",
      "title": "Produto 13",
      "price": 387.33,
      "stars": 3
    },
    {
      "id": "14",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+14",
      "title": "Produto 14",
      "price": 599.99,
      "stars": 4
    },
    {
      "id": "15",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+15",
      "title": "Produto 15",
      "price": 222.22,
      "stars": 3
    },
    {
      "id": "16",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+16",
      "title": "Produto 16",
      "price": 450.0,
      "stars": 4
    },
    {
      "id": "17",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+17",
      "title": "Produto 17",
      "price": 349.75,
      "stars": 3
    },
    {
      "id": "18",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+18",
      "title": "Produto 18",
      "price": 499.99,
      "stars": 4
    },
    {
      "id": "19",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+19",
      "title": "Produto 19",
      "price": 175.25,
      "stars": 3
    },
    {
      "id": "20",
      "imageUrl": "https://via.placeholder.com/220x250?text=Produto+20",
      "title": "Produto 20",
      "price": 444.75,
      "stars": 3
    }
  ];

}
