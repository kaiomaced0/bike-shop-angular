import { Component } from '@angular/core';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FreioService } from '../../../../services/freio/freio.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Freio } from '../../../../models/freio.model';

@Component({
  selector: 'app-edit-freio',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-freio.component.html',
  styleUrl: './edit-freio.component.css'
})
export class EditFreioComponent {



  freio: Freio = new Freio();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: FreioService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.freio = data;
        },
        error: (error) => {
          console.error('Erro ao buscar Freio', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/freios']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarFreio() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar o Freio?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.freio.id!, this.freio).subscribe({
            next: () => {
              console.log('Freio atualizado com sucesso');
              this.router.navigate(['/admin/freios']);
              this.snackBar.open('Freio atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Freio:', erro);
            }
          });
        }


  });}

}
