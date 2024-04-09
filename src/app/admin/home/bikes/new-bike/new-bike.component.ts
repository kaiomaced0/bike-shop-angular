import { Component } from '@angular/core';
import { Bike } from '../../../../models/bike.models';
import { BikeDTO } from '../../../../dto/bike.dto';
import { Router } from '@angular/router';
import { BikeService } from '../../../../services/bike/bike.service';
import { FormsModule } from '@angular/forms';
import { ProdutoDTO } from '../../../../dto/produto.dto';

@Component({
  selector: 'app-new-bike',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-bike.component.html',
  styleUrl: './new-bike.component.css'
})
export class NewBikeComponent {


  bike: BikeDTO = new BikeDTO();

  constructor(private router: Router, private service: BikeService) {
    this.bike!.produto! = new ProdutoDTO();
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
      },
      error: (erro) => {
        console.error('Erro ao adicionar bike:', erro, this.bike!);
        // Trate erros, como exibir uma mensagem para o usuário
      }
    });
  }
}
