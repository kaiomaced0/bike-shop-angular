import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPneusComponent } from './list-pneus/list-pneus.component';
import { PneuService } from '../../../services/pneu/pneu.service';
import { NewPneuComponent } from './new-pneu/new-pneu.component';

const routes: Routes = [
  {path: '', component: ListPneusComponent},
  {path: 'new', component: NewPneuComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PneuService]
})
export class PneusRoutingModule { }
