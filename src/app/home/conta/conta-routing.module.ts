import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { DadosComponent } from './dados/dados.component';
import { AuthService } from '../../services/auth/auth.service';

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
    path: 'telefones',
    loadChildren: () => import('./telefones/telefones.module').then(m => m.TelefonesModule)
  },
  {
    path: 'compras',
    loadChildren: () => import('./compras/compras.module').then(m => m.ComprasModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class ContaRoutingModule { }
