import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-confierm-dialog-resetarsenha',
  standalone: true,
  imports: [MatDialogModule,
    MatSnackBarModule, MatButton],
  templateUrl: './confierm-dialog-resetarsenha.component.html',
  styleUrl: './confierm-dialog-resetarsenha.component.css'
})
export class ConfiermDialogResetarsenhaComponent {

constructor(
  public dialogRef: MatDialogRef<ConfiermDialogResetarsenhaComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any
) {}

}
