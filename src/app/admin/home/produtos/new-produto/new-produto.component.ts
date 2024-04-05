import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect } from '@angular/material/select';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { Produto } from '../../../../models/produto.model';
import { ProdutoDTO } from '../../../../dto/produto.dto';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent{
  marcas = ['Marca 1', 'Marca 2', 'Marca 3'];


  produto: ProdutoDTO = new ProdutoDTO();

  constructor(private router: Router, private service: ProdutoService) {}
  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
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
        // Trate erros, como exibir uma mensagem para o usuário
      }
    });
  }
}
