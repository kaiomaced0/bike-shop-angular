import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFerramentasComponent } from './list-ferramentas/list-ferramentas.component';
import { FerramentaService } from '../../../services/ferramenta/ferramenta.service';
import { ProdutoService } from '../../../services/produto/produto.service';
import { NewFerramentaComponent } from './new-ferramenta/new-ferramenta.component';
import { EditFerramentaComponent } from './edit-ferramenta/edit-ferramenta.component';

const routes: Routes = [
  {path: '', component: ListFerramentasComponent},
  {path: 'new', component: NewFerramentaComponent},
  {path: 'edit/:id', component: EditFerramentaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FerramentaService, ProdutoService]
})
export class FerramentasRoutingModule { }
