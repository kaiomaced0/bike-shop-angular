import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent{
  produto: Produto = new Produto();

  cancelar(){
    this.router.navigate(['/admin/produtos']);
  }

  constructor(private router: Router, private service: ProdutoService) {

  }
  adicionarProduto() {
    this.produto!.idCor = 1;
    this.produto!.idMarca = 1;
    this.produto!.img = [];
    this.service.insert(this.produto!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/admin/produtos']);
      },
      error: (erro) => {
        console.error('Erro ao adicionar produto:', erro, this.produto!);
      }
    });
  }
}
