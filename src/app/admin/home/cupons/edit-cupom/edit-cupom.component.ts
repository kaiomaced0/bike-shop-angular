import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Cupom } from '../../../../models/cupom.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CupomService } from '../../../../services/cupom/cupom.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';

@Component({
  selector: 'app-edit-cupom',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './edit-cupom.component.html',
  styleUrl: './edit-cupom.component.css'
})
export class EditCupomComponent {

  cupom: Cupom = new Cupom();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: CupomService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getById(+id).subscribe({
        next: (data) => {
          this.cupom = data;
        },
        error: (error) => {
          console.error('Erro ao buscar Cupom', error);
        }
      });
    }
  }

  cancelar(){
    this.router.navigate(['/admin/cupons']);
  }

  atualizarCupom() {
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar o Cupom?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.cupom.id!, this.cupom).subscribe({
            next: () => {
              console.log('Cupom atualizado com sucesso');
              this.router.navigate(['/admin/cupons']);
              this.snackBar.open('Cupom atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Cupom:', erro);
            }
          });
        }

  });}


}
