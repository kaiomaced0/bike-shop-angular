import { Component, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { UsuarioService } from '../../../../services/usuario/usuario.service';
import { Usuario } from '../../../../models/usuario.model';

@Component({
  selector: 'app-list-usuarios',
  standalone: true,
  imports: [MatIcon, MatButton],
  templateUrl: './list-usuarios.component.html',
  styleUrl: './list-usuarios.component.css',
})
export class ListUsuariosComponent {

  constructor(private router: Router, private usuarioService: UsuarioService) {
  }

  usuarios: Usuario[] = [];

  ngOnInit() {
    this.usuarioService.getAll().subscribe((data: Usuario[]) => {
      this.usuarios = data;
    });
  }

  irParaNewUsuario() {
    this.router.navigate(['/admin/usuarios/new']);
  }
  resetarSenha(id:number){
    this.usuarioService.resetarSenha(id);
  }
}
