import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CardProdutoComponent } from '../../components/card-produto/card-produto.component';
import { CarroselHomeComponent } from '../../components/carrosel-home/carrosel-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, CardProdutoComponent, CarroselHomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
