import { Component, Input } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-card-produto',
  standalone: true,
  imports: [MatCard, MatIcon],
  templateUrl: './card-produto.component.html',
  styleUrl: './card-produto.component.css'
})
export class CardProdutoComponent {


  constructor(private router: Router, private service: UsuariologadoService) {
  }
  @Input() id?: number; // Valor padrão para o id
  @Input() imageUrl: SafeUrl = 'https://via.placeholder.com/190x215';
  @Input() title: string = 'Produto Padrão'; // Valor padrão para o título
  @Input() price: number = 0.00; // Valor padrão para o preço
  @Input() stars: number = 0; // Valor padrão para a quantidade de estrelas

  curtir() {
    this.service.insertGostei(this.id!);
    console.log("Produto curtido:", this.id!);
  }

  comprar() {
    console.log("Produto comprado:", this.id);
    // Implemente a lógica para "comprar" aqui
  }


  irParaDetail() {
    this.router.navigate(['/detail/'+this.id]);
  }


}
