import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Produto } from '../../../../models/produto.model';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { EnderecoService } from '../../../../services/endereco/endereco.service';
import { UsuariologadoService } from '../../../../services/usuariologado/usuariologado.service';
import { Endereco } from '../../../../models/endereco.models';

@Component({
  selector: 'app-enderecos',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './enderecos.component.html',
  styleUrl: './enderecos.component.css'
})
export class EnderecosComponent implements OnInit {


  constructor(private router: Router, private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  enderecos: Endereco[] = [];

  ngOnInit() {
    this.usuarioLogadoService.getEnderecos().subscribe((data: Produto[]) => {
      this.enderecos = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/conta/enderecos/edit/${id}`]);
  }

  new() {
    this.router.navigate(['/conta/enderecos/add']);
  }
  principal(id:number){

  }

}
