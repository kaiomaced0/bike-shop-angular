import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEntregasComponent } from './list-entregas/list-entregas.component';
import { NewEntregaComponent } from './new-entrega/new-entrega.component';
import { EditEntregaComponent } from './edit-entrega/edit-entrega.component';
import { ViewEntregaComponent } from './view-entrega/view-entrega.component';

const routes: Routes = [
  {path: '', component: ListEntregasComponent},
  {path: 'new', component: NewEntregaComponent},
  {path: 'edit', component: EditEntregaComponent},
  {path: 'view', component: ViewEntregaComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntregasRoutingModule { }
