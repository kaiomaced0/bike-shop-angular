import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMarcasComponent } from './list-marcas/list-marcas.component';
import { NewMarcaComponent } from './new-marca/new-marca.component';
import { EditMarcaComponent } from './edit-marca/edit-marca.component';
import { ViewMarcaComponent } from './view-marca/view-marca.component';
import { MarcaService } from '../../../services/marca/marca.service';

const routes: Routes = [
  {path: '', component: ListMarcasComponent},
  {path: 'new', component: NewMarcaComponent},
  {path: 'edit/:id', component: EditMarcaComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [MarcaService]
})
export class MarcaRoutingModule { }
