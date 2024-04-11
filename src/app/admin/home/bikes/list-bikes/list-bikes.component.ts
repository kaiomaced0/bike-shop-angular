import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Router } from '@angular/router';
import { BikeService } from '../../../../services/bike/bike.service';
import { Bike } from '../../../../models/bike.models';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-list-bikes',
  standalone: true,
  imports: [MatIcon, MatButton, HttpClientModule],
  templateUrl: './list-bikes.component.html',
  styleUrl: './list-bikes.component.css'
})
export class ListBikesComponent {

  constructor(private router: Router, private bikeService: BikeService, private dialog: MatDialog, private snackBar: MatSnackBar) {
  }

  bikes: Bike[] = [];

  ngOnInit() {
    this.bikeService.getAll().subscribe((data: Bike[]) => {
      this.bikes = data;
    });
  }
  editar(id:number) {
    this.router.navigate([`/admin/bikes/edit/${id}`]);
  }

  irParaNewBike() {
    this.router.navigate(['/admin/bikes/new']);
  }


  deletar(id:number, nome:string){
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja Deletar a Bike de nome: ${nome}?`,
        n: nome
      }});

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bikeService.delete(id).subscribe({
          next: () => {
            this.snackBar.open('Bike deletada', 'Fechar', {
              duration: 2000,
            });
            this.ngOnInit();
          },
          error: (error) => {
            this.snackBar.open('Erro ao deletar Bike', 'Fechar', {
              duration: 1000,
            });
          }
        });
      }
    });
    }


}
