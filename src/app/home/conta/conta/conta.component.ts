import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { Usuario } from '../../../models/usuario.model';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [RouterOutlet, MatFormField, MatButtonModule, MatInputModule, MatLabel],
  templateUrl: './conta.component.html',
  styleUrl: './conta.component.css'
})
export class ContaComponent implements OnInit {
  usuario?: Usuario;
  tell?: string[] = [];

  constructor(private router: Router, private usuarioLogadoService: UsuariologadoService) { }

  ngOnInit(): void {
    this.usuarioLogadoService.getUsuarioLogado().subscribe(
      data => {
        this.usuario = data;
        this.tell =this.usuario.telefones;
        console.log(this.tell);
      },
      error => {
        console.error('Erro ao carregar dados do usuário', error);
      }
    );
  }

  editarPerfil(): void {
    this.irParaDados();
  }

  irParaDados() {
    this.router.navigate(['/conta/dados']);
  }
  irParaEnderecos() {
    this.router.navigate(['/conta/enderecos']);
  }
  irParaPedidos() {
    this.router.navigate(['/conta/pedidos']);
  }
  irParaFavoritos() {
    this.router.navigate(['/favoritos']);
  }
  irParaServicos() {
    this.router.navigate(['/servicos']);
  }
  irParaSugestoes() {
    this.router.navigate(['/servicos/sugestoes']);
  }
  irParaQuestions() {
    this.router.navigate(['/servicos/questions']);
  }
}
