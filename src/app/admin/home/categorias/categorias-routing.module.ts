import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCategoriasComponent } from './list-categorias/list-categorias.component';
import { NewCategoriaComponent } from './new-categoria/new-categoria.component';
import { EditCategoriaComponent } from './edit-categoria/edit-categoria.component';
import { ViewCategoriaComponent } from './view-categoria/view-categoria.component';
import { CategoriaService } from '../../../services/categoria/categoria.service';

const routes: Routes = [
  {path: '', component: ListCategoriasComponent},
  {path: 'new', component: NewCategoriaComponent},
  {path: 'edit', component: EditCategoriaComponent},
  {path: 'view', component: ViewCategoriaComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CategoriaService]
})
export class CategoriasRoutingModule { }
