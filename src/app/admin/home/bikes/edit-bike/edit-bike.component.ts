import { Component } from '@angular/core';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { Bike } from '../../../../models/bike.models';
import { ActivatedRoute, Router } from '@angular/router';
import { BikeService } from '../../../../services/bike/bike.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-edit-bike',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-bike.component.html',
  styleUrl: './edit-bike.component.css'
})
export class EditBikeComponent {


  bike: Bike = new Bike();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: BikeService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.bike = data;
        },
        error: (error) => {
          console.error('Erro ao buscar Bike', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/Bikes']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarBike() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar o Bike?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.bike.produto!.id!, this.bike).subscribe({
            next: () => {
              console.log('Bike atualizado com sucesso');
              this.router.navigate(['/admin/bikes']);
              this.snackBar.open('Bike atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Bike:', erro);
            }
          });
        }


  });}


}
