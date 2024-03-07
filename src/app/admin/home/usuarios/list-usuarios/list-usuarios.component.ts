import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css',
})
export class ListUsuariosComponent {
  constructor(private router: Router) {}

  usuarios = [
    { id: 1, nome: 'Usuário 1', cpf: '123.456.789-00', email: 'usuario1@exemplo.com', numeroDeTelefone: '1234-5678', valorGasto: 1000 },
    { id: 2, nome: 'Usuário 2', cpf: '987.654.321-00', email: 'usuario2@exemplo.com', numeroDeTelefone: '8765-4321', valorGasto: 2000 },
    // Adicione mais usuários conforme necessário
  ];


  irParaNewUsuario() {
    this.router.navigate(['/admin/usuarios/new']);
  }
}
