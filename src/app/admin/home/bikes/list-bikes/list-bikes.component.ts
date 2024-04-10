import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BikeService } from '../../../../services/bike/bike.service';
import { Bike } from '../../../../models/bike.models';

@Component({
  selector: 'app-list-bikes',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-bikes.component.html',
  styleUrl: './list-bikes.component.css'
})
export class ListBikesComponent {

  constructor(private router: Router, private bikeService: BikeService) {
  }

  bikes: Bike[] = [];

  ngOnInit() {
    this.bikeService.getAll().subscribe((data: Bike[]) => {
      this.bikes = data;

    });
  }

  irParaNewBike() {
    this.router.navigate(['/admin/bikes/new']);
  }
  editarBike(produtoId: number) {
    this.router.navigate([`/admin/bikes/edit/${produtoId}`]);
  }

  excluirBike(produtoId: number) {
    // Lógica para excluir o produto
  }


}
