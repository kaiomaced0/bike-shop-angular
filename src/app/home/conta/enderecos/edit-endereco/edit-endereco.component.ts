import { Component, OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Endereco } from '../../../../models/endereco.models';
import { EnderecoService } from '../../../../services/endereco/endereco.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cidade } from '../../../../models/cidade.models';
import { CidadeService } from '../../../../services/cidade/cidade.service';
import { UsuariologadoService } from '../../../../services/usuariologado/usuariologado.service';

@Component({
  selector: 'app-edit-endereco',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule],
  templateUrl: './edit-endereco.component.html',
  styleUrl: './edit-endereco.component.css'
})
export class EditEnderecoComponent implements OnInit {


  endereco: Endereco = new Endereco();

  cidades: Cidade[] = [];

  cancelar(){
    this.router.navigate(['/conta/enderecos']);
  }

  constructor(
    private activatedRoute: ActivatedRoute, private router: Router, private service: EnderecoService, private snackBar: MatSnackBar, private cidadeService: CidadeService, private usuarioLogadoService: UsuariologadoService){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    // this.usuarioLogadoService.getEnderecos().subscribe((data: Produto[]) => {

    // this.cidadeService.list().subscribe({
    //   next: (c) => {
    //     this.cidades = c;
    //   },
    //   error: (erro) => {
    //     console.error('Erro ao carregar cidades', erro);
    //   }
    // });
    //   data.forEach(element => {
    //       if (element.id?.toString() == id){
    //         this.endereco = element;
    //         this.endereco.idCidade = this.endereco.cidade?.id;

    //       }
    //   });
    // });
  }
  ngOnInit() {

  }
  update() {
    this.service.update(this.endereco!.id!, this.endereco!).subscribe({
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
