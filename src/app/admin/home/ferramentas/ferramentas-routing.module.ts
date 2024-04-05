import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFerramentasComponent } from './list-ferramentas/list-ferramentas.component';
import { FerramentaService } from '../../../services/ferramenta/ferramenta.service';
import { ProdutoService } from '../../../services/produto/produto.service';

const routes: Routes = [
  {path: '', component: ListFerramentasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FerramentaService, ProdutoService]
})
export class FerramentasRoutingModule { }
