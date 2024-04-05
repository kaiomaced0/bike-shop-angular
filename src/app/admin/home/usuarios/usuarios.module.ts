import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsuarioService } from '../../../services/usuario/usuario.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsuariosRoutingModule, HttpClientModule
  ],
  providers: [UsuarioService]
})
export class UsuariosModule { }
