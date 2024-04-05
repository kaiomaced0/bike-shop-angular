import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CupomService } from '../../../../services/cupom/cupom.service';
import { Cupom } from '../../../../models/cupom.model';

@Component({
  selector: 'app-new-cupom',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-cupom.component.html',
  styleUrl: './new-cupom.component.css'
})
export class NewCupomComponent {
  cupom: Cupom = new Cupom();

  constructor(private router: Router, private service: CupomService) {}
  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }
  adicionarCupom() {
    this.cupom.produtos = [];
    this.service.insert(this.cupom!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/admin/cupons']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar produto:', erro, this.cupom!);
        // Trate erros, como exibir uma mensagem para o usuário
      }
    });
  }
}
