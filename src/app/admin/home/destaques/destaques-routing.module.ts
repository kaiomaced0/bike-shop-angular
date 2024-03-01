import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestaquesComponent } from './destaques/destaques.component';

const routes: Routes = [
  {path: '', component: DestaquesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DestaquesRoutingModule { }
