import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfiermDialogResetarsenhaComponent } from '../../../../components/dialog/confierm-dialog-resetarsenha/confierm-dialog-resetarsenha.component';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { MarcaService } from '../../../../services/marca/marca.service';
import { MatSelectModule } from '@angular/material/select';
import { Categoria } from '../../../../models/categoria.model';
import { Marca } from '../../../../models/marca.model';
import { FileService } from '../../../../services/file/file.service';
import { MatInputModule } from '@angular/material/input';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-edit-produto',
  standalone: true,
  imports: [FormsModule, MatButton, MatSelectModule, ReactiveFormsModule, MatInputModule, MatProgressBarModule, NgIf],
  templateUrl: './edit-produto.component.html',
  styleUrl: './edit-produto.component.css'
})
export class EditProdutoComponent implements OnInit {


  produto: Produto = new Produto();
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  img: string[] = [];
  selectedFiles: FileList | null = null;
  uploadPercent: number | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private service: ProdutoService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private fileService: FileService,
    private storage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    console.log(this.produto);
    this.produto.categoriasId = [];
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.service.getByIdAdmin(+id).subscribe({
        next: (data) => {
          this.produto = data;
          this.img = data.img!;
          console.log(this.produto);
          this.produto.categoriasId = data.categorias?.map((categoria: any) => categoria.id!) || [];
          this.produto!.idMarca = data.marca!.id!;

        },
        error: (error) => {
          console.error('Erro ao buscar produto', error);
        }
      });
    }
    this.categoriaService.getAll().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (erro) => {
        console.error('Erro ao carregar categorias', erro);
      }
    });
    this.marcaService.getAll().subscribe({
      next: (marcas) => {
        this.marcas = marcas;
      },
      error: (erro) => {
        console.error('Erro ao carregar marcas', erro);
      }
    });

  }


  onFileSelected(event: any): void {
    this.selectedFiles = event.target.files;
  }

  addImage(imageUrl: string) {
    this.img.push(imageUrl);
  }

  removeImage(imageUrl: string) {
    this.img = this.img.filter(image => image !== imageUrl);
  }

  uploadFile(event: any) {
    const file = event.target.files[0];
    const filePath = `images/${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    task.percentageChanges().subscribe(percent => {
      this.uploadPercent = percent;
    });

    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(url => {
          this.addImage(url);
        });
      })
    ).subscribe();
  }

  cancelar(){
    this.router.navigate(['/admin/produtos']);
  }

  onSubmit(form: any) {
    console.log('Dados do Formulário:', form.value);
  }

  atualizarProduto() {
    this.produto.img = this.img;
    const dialogRef = this.dialog.open(ConfiermDialogResetarsenhaComponent, {
      width: '250px',
      data: {
        message: `Tem certeza que deseja atualizar o produto?`,
      }});
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.update(this.produto.id!, this.produto).subscribe({
            next: () => {
              console.log('Produto atualizado com sucesso');
              this.router.navigate(['/admin/produtos']);
              this.snackBar.open('Produto atualizado', 'Fechar', {
                duration: 2000,
              });
            },
            error: (erro) => {
              console.error('Erro ao atualizar Produto:', erro);
            }
          });
        }


  });}

}
