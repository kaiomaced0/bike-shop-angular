import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../../../../services/bike/bike.service';
import { FormsModule } from '@angular/forms';
import { Bike } from '../../../../models/bike.models';
import { Produto } from '../../../../models/produto.model';
import { MatButton } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-bike',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './new-bike.component.html',
  styleUrl: './new-bike.component.css'
})
export class NewBikeComponent {


  bike: Bike = new Bike();

  constructor(private router: Router, private service: BikeService, private snackBar: MatSnackBar) {
    this.bike!.produto! = new Produto();
  }


  cancelar(){
    this.router.navigate(['/admin/bikes']);
  }

  adicionarBike() {

    this.bike!.produto!.idCor = 1;
    this.bike!.produto!.idMarca = 1;
    this.bike!.produto!.img = [];
    this.bike!.idTamanho = 1;
    this.bike!.idTipoBike = 1;
    this.service.insert(this.bike!).subscribe({
      next: (bikeadd) => {
        console.log('bike adicionado com sucesso:', bikeadd);
        this.router.navigate(['/admin/bikes']);
        this.snackBar.open('Bike Adicionada', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar bike:', erro, this.bike!);
        // Trate erros, como exibir uma mensagem para o usuário
      }
    });
  }
}
