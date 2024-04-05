import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBikesComponent } from './list-bikes/list-bikes.component';
import { BikeService } from '../../../services/bike/bike.service';
import { ProdutoService } from '../../../services/produto/produto.service';
import { NewBikeComponent } from './new-bike/new-bike.component';

const routes: Routes = [
  {path:'', component: ListBikesComponent},
  {path: 'new', component: NewBikeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [BikeService, ProdutoService]
})
export class BikesRoutingModule { }
