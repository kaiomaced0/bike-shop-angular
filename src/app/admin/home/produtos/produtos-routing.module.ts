import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import { NewProdutoComponent } from './new-produto/new-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { ViewProdutoComponent } from './view-produto/view-produto.component';
import { ProdutoService } from '../../../services/produto/produto.service';
import { CategoriaService } from '../../../services/categoria/categoria.service';
import { MarcaService } from '../../../services/marca/marca.service';

const routes: Routes = [
  {path: '', component: ListProdutosComponent},
  {path: 'new', component: NewProdutoComponent},
  {path: 'edit/:id', component: EditProdutoComponent},
  {path: 'view/:id', component: ViewProdutoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ProdutoService, CategoriaService, MarcaService]
})
export class ProdutosRoutingModule { }
