import { Component, OnInit } from '@angular/core';
import { Cartao } from '../../../../models/cartao.model';
import { Router } from '@angular/router';
import { UsuariologadoService } from '../../../../services/usuariologado/usuariologado.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartaoService } from '../../../../services/cartao/cartao.service';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { MatButton } from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-cartao',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, NgFor],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css'
})
export class CartaoComponent implements OnInit{


  cartao: Cartao = new Cartao();
  bandeiraCartao = ['MasterCard', 'Visa Débito', 'Elo', 'AmericanExpress', 'Maestro'];


  cancelar(){
    this.router.navigate(['/conta/cartaos']);
  }

  constructor(private router: Router, private service: CartaoService, private snackBar: MatSnackBar){
  }

  selecionarBandeira(event: any) {
    this.cartao!.bandeiraCartaoId = event.value;
    console.log(event.value);
  }

  ngOnInit() {
  }
  add() {
    this.service.insert(this.cartao!).subscribe({
      next: (e) => {
        this.snackBar.open('cartao adicionado com sucesso', 'Fechar', {
          duration: 3000,
        });
        this.router.navigate(['/pagamento']);
      },
      error: (erro) => {
        this.snackBar.open('Erro ao adicionar cartao:', 'Fechar', {
          duration: 2000,
        });
        console.error('Erro ao adicionar cartao:', erro, this.cartao!);
      }
    });
  }

}
