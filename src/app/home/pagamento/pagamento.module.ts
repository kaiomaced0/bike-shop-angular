import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { CompraService } from '../../services/compra/compra.service';
import { CartaoService } from '../../services/cartao/cartao.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagamentoRoutingModule
  ],
  providers: [CompraService, CartaoService]
})
export class PagamentoModule { }
