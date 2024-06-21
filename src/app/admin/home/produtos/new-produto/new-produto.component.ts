import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatOption, MatSelect, MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { ProdutoService } from '../../../../services/produto/produto.service';
import { MatButton } from '@angular/material/button';
import { Produto } from '../../../../models/produto.model';
import { CategoriaService } from '../../../../services/categoria/categoria.service';
import { Categoria } from '../../../../models/categoria.model';
import { Marca } from '../../../../models/marca.model';
import { MarcaService } from '../../../../services/marca/marca.service';
import { FileService } from '../../../../services/file/file.service';
import { finalize, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgIf } from '@angular/common';
import { MatProgressBar } from '@angular/material/progress-bar';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-new-produto',
  standalone: true,
  imports: [FormsModule, MatFormField, MatSelect, MatLabel, MatOption, MatButton, MatSelectModule, ReactiveFormsModule, NgIf, MatProgressBar],
  templateUrl: './new-produto.component.html',
  styleUrl: './new-produto.component.css'
})
export class NewProdutoComponent implements OnInit {

  produto: Produto = new Produto();
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  selectedFiles: FileList | null = null;
  img: string[] = [];
  uploadPercent: number | undefined;

  cancelar() {
    this.router.navigate(['/admin/produtos']);
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: ProdutoService,
    private categoriaService: CategoriaService,
    private marcaService: MarcaService,
    private storage: AngularFireStorage,
    private snackBar: MatSnackBar) {

  }
  ngOnInit() {
    this.produto.categoriasId = [];
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


  adicionarProduto() {
    this.produto!.idCor = 1;
    this.produto!.img = this.img;
    this.service.insert(this.produto!).subscribe({
      next: (produtoAdicionado) => {
        console.log('Produto adicionado com sucesso:', produtoAdicionado);
        this.router.navigate(['/admin/produtos']);

        this.snackBar.open('Produto adicionado', 'Fechar', {
          duration: 2000,
        });
      },
      error: (erro) => {
        console.error('Erro ao adicionar produto:', erro, this.produto!);
        this.snackBar.open('Erro ao adicionar Produto', 'Fechar', {
          duration: 2000,
        });
      }
    });

  }
}
