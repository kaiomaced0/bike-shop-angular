import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { PneuService } from '../../../../services/pneu/pneu.service';
import { Pneu } from '../../../../models/pneu.model';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-pneu',
  standalone: true,
  imports: [MatFormField,FormsModule, MatButton],
  templateUrl: './new-pneu.component.html',
  styleUrl: './new-pneu.component.css'
})
export class NewPneuComponent {
  pneu: Pneu = new Pneu();

  constructor(private router: Router, private service: PneuService, private snackBar: MatSnackBar) {}


  cancelar(){
    this.router.navigate(['/admin/pneus']);
  }

  adicionarPneu() {
    this.pneu!.idCor = 1;
    this.pneu!.idMarca = 1;
    this.pneu!.img = [];
    this.service.insert(this.pneu!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Pneu adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/admin/pneus']);
        this.snackBar.open('Pneu Adicionado', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar Pneu:', erro, this.pneu!);
      }
    });
  }
}
