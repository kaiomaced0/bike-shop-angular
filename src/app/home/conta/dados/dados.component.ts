import { Component, OnInit } from '@angular/core';
import { UsuariologadoService } from '../../../usuariologado/usuariologado.service';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { Usuario } from '../../../models/usuario.model';

@Component({
  selector: 'app-dados',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './dados.component.html',
  styleUrl: './dados.component.css'
})
export class DadosComponent implements OnInit {
  usuario?: Usuario;

  constructor(private usuarioLogadoService: UsuariologadoService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.usuarioLogadoService.getUsuarioLogado().subscribe(
      data => {
        this.usuario = data;
      },
      error => {
        console.error('Erro ao carregar dados do usuário', error);
      }
    );
  }


}
