import { Component, OnInit} from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { Telefone } from '../../../../models/telefone.models';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Cidade } from '../../../../models/cidade.models';
import { CidadeService } from '../../../../services/cidade/cidade.service';
import { UsuariologadoService } from '../../../../services/usuariologado/usuariologado.service';

@Component({
  selector: 'app-new-telefones',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule],
  templateUrl: './new-telefones.component.html',
  styleUrl: './new-telefones.component.css'
})
export class NewTelefonesComponent implements OnInit{

  telefone: Telefone = new Telefone();


  cancelar(){
    this.router.navigate(['/conta/telefones']);
  }

  constructor(private router: Router, private service: UsuariologadoService, private snackBar: MatSnackBar){
  }
  ngOnInit() {
  }
  add() {
    this.service.insertTelefone(this.telefone!).subscribe({
      next: (e) => {
        this.snackBar.open('Telefone adicionado com sucesso', 'Fechar', {
          duration: 3000,
        });
        this.router.navigate(['/conta/telefones']);
      },
      error: (erro) => {
        this.snackBar.open('Erro ao adicionar telefone:', 'Fechar', {
          duration: 2000,
        });
        console.error('Erro ao adicionar telefone:', erro, this.telefone!);
      }
    });
  }

}
