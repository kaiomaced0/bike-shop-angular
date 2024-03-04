import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent {

  constructor(private router: Router) {}

  irParaDados() {
    this.router.navigate(['/conta/dados']);
  }
  irParaEnderecos() {
    this.router.navigate(['/conta/enderecos']);
  }
  irParaPedidos() {
    this.router.navigate(['/conta/pedidos']);
  }
  irParaFavoritos() {
    this.router.navigate(['/favoritos']);
  }
  irParaServicos() {
    this.router.navigate(['/servicos']);
  }
  irParaSugestoes() {
    this.router.navigate(['/servicos/sugestoes']);
  }
  irParaQuestions() {
    this.router.navigate(['/servicos/questions']);
  }
}
