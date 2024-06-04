import { Component } from '@angular/core';
import { UploadService } from '../../../services/upload/upload.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private uploadService: UploadService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    if (this.selectedFile) {
      this.uploadService.uploadFile(this.selectedFile);
    }
  }

}
