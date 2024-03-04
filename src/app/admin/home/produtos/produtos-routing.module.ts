import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProdutosComponent } from './list-produtos/list-produtos.component';
import { NewProdutoComponent } from './new-produto/new-produto.component';
import { EditProdutoComponent } from './edit-produto/edit-produto.component';
import { ViewProdutoComponent } from './view-produto/view-produto.component';

const routes: Routes = [
  {path: '', component: ListProdutosComponent},
  {path: 'new', component: NewProdutoComponent},
  {path: 'edit', component: EditProdutoComponent},
  {path: 'view', component: ViewProdutoComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
