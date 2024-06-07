import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { CompraService } from '../../services/compra/compra.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagamentoRoutingModule
  ],
  providers: [CompraService]
})
export class PagamentoModule { }
