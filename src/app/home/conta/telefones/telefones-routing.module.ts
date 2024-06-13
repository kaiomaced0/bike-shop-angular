import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariologadoService } from '../../../services/usuariologado/usuariologado.service';
import { ProdutoService } from '../../../services/produto/produto.service';
import { TelefonesComponent } from './telefones/telefones.component';
import { NewTelefonesComponent } from './new-telefones/new-telefones.component';

const routes: Routes = [
  {path: '', component: TelefonesComponent},
  {path: 'add', component: NewTelefonesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UsuariologadoService, ProdutoService]
})
export class TelefonesRoutingModule { }
