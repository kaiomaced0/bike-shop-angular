import { Component, OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { Categoria } from '../../../../models/categoria.model';
import { Marca } from '../../../../models/marca.model';
import { MarcaService } from '../../../../services/marca/marca.service';
import { UploadComponent } from '../../../../components/upload/upload/upload.component';
import { Endereco } from '../../../../models/endereco.models';
import { EnderecoService } from '../../../../services/endereco/endereco.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cidade } from '../../../../models/cidade.models';
import { CidadeService } from '../../../../services/cidade/cidade.service';

@Component({
  selector: 'app-add-endereco',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, UploadComponent],
  templateUrl: './add-endereco.component.html',
  styleUrl: './add-endereco.component.css'
})
export class AddEnderecoComponent implements OnInit {

  endereco: Endereco = new Endereco();

  cidades: Cidade[] = [];

  cancelar(){
    this.router.navigate(['/conta/enderecos']);
  }

  constructor(private router: Router, private service: EnderecoService, private snackBar: MatSnackBar, private cidadeService: CidadeService){
    this.cidadeService.list().subscribe({
      next: (c) => {
        this.cidades = c;
      },
      error: (erro) => {
        console.error('Erro ao carregar cidades', erro);
      }
    });
  }
  ngOnInit() {

  }
  add() {
    this.service.insert(this.endereco!).subscribe({
      next: (e) => {
        this.snackBar.open('Endereço adicionado com sucesso', 'Fechar', {
          duration: 3000,
        });
        this.router.navigate(['/conta/enderecos']);
      },
      error: (erro) => {
        this.snackBar.open('Erro ao adicionar endereco:', 'Fechar', {
          duration: 2000,
        });
        console.error('Erro ao adicionar endereco:', erro, this.endereco!);
      }
    });
  }

}
