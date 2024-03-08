import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-cupons',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-cupons.component.html',
  styleUrl: './list-cupons.component.css'
})
export class ListCuponsComponent {
  constructor(private router: Router) {}

  cupons = [
    { id: 1, nome: 'cupom 1', desconto: 10, usados: 30,valorRealizado: 23255, quantidadeEstoque: 10},
    { id: 2, nome: 'cupom 2', desconto: 20, usados: 40,valorRealizado: 5421, quantidadeEstoque: 20},
    // Adicione mais cupoms conforme necessário
  ];

  irParaNewCupom() {
    this.router.navigate(['/admin/cupons/new']);
  }
  editarCupom(cupomId: number) {
    this.router.navigate(['/admin/cupons/edit']);
  }

  excluirCupom(cupomId: number) {
    // Lógica para excluir o cupom
  }

}
