import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { PneuDTO } from '../../../../dto/pneu.dto';
import { PneuService } from '../../../../services/pneu/pneu.service';

@Component({
  selector: 'app-new-pneu',
  standalone: true,
  imports: [MatFormField,FormsModule],
  templateUrl: './new-pneu.component.html',
  styleUrl: './new-pneu.component.css'
})
export class NewPneuComponent {
  pneu: PneuDTO = new PneuDTO();

  constructor(private router: Router, private service: PneuService) {}
  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }
  adicionarPneu() {
    this.pneu!.idCor = 1;
    this.pneu!.idMarca = 1;
    this.pneu!.img = [];
    this.service.insert(this.pneu!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Pneu adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/admin/produtos']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar Pneu:', erro, this.pneu!);
        // Trate erros, como exibir uma mensagem para o usuário
      }
    });
  }
}
