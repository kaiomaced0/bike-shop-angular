import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { DadosComponent } from './dados/dados.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  {
    path: '', component: ContaComponent
  },
  {path: 'dados', component: DadosComponent},
  {
    path: 'enderecos',
    loadChildren: () => import('./enderecos/enderecos.module').then(m => m.EnderecosModule)
  },
  {
    path: 'pedidos', component: PedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
