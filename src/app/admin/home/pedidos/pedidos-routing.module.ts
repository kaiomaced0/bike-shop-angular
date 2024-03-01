import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPedidosComponent } from './list-pedidos/list-pedidos.component';
import { ViewPedidoComponent } from './view-pedido/view-pedido.component';

const routes: Routes = [
  {path: '', component: ListPedidosComponent},
  {path: 'view', component: ViewPedidoComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
