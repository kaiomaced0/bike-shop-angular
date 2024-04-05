import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './list-pedidos/list-pedidos.component';
import { ViewPedidoComponent } from './view-pedido/view-pedido.component';
import { CompraService } from '../../../services/compra/compra.service';

const routes: Routes = [
  {path: '', component: ListPedidosComponent},
  {path: 'view', component: ViewPedidoComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CompraService]
})
export class PedidosRoutingModule { }
