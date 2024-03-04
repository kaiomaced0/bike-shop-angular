import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCuponsComponent } from './list-cupons/list-cupons.component';
import { NewCupomComponent } from './new-cupom/new-cupom.component';
import { EditCupomComponent } from './edit-cupom/edit-cupom.component';
import { ViewCupomComponent } from './view-cupom/view-cupom.component';

const routes: Routes = [
  {path: '', component: ListCuponsComponent},
  {path: 'new', component: NewCupomComponent},
  {path: 'edit', component: EditCupomComponent},
  {path: 'view', component: ViewCupomComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuponsRoutingModule { }
