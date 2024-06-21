import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoComponent } from './endereco/endereco.component';
import { CartaoComponent } from './cartao/cartao/cartao.component';

const routes: Routes = [
  {path: '', component: EnderecoComponent},
  {path: 'cartao', component: CartaoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
