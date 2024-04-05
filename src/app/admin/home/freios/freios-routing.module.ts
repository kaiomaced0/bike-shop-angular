import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFreiosComponent } from './list-freios/list-freios.component';
import { FreioService } from '../../../services/freio/freio.service';
import { NewFreioComponent } from './new-freio/new-freio.component';

const routes: Routes = [
  {path:'', component: ListFreiosComponent},
  {path:'new', component: NewFreioComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [FreioService]
})
export class FreiosRoutingModule { }
