import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMarcasComponent } from './list-marcas/list-marcas.component';
import { NewMarcaComponent } from './new-marca/new-marca.component';
import { EditMarcaComponent } from './edit-marca/edit-marca.component';
import { ViewMarcaComponent } from './view-marca/view-marca.component';

const routes: Routes = [
  {path: '', component: ListMarcasComponent},
  {path: 'new', component: NewMarcaComponent},
  {path: 'edit', component: EditMarcaComponent},
  {path: 'view', component: ViewMarcaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }
