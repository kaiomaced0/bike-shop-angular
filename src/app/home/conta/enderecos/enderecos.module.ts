import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnderecosRoutingModule } from './enderecos-routing.module';
import { CidadeService } from '../../../services/cidade/cidade.service';
import { EnderecoService } from '../../../services/endereco/endereco.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnderecosRoutingModule
  ],
  providers: [CidadeService, EnderecoService]
})
export class EnderecosModule { }
