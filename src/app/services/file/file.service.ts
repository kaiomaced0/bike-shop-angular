import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  // private baseUrl = 'http://localhost:8080/file';
  private baseUrl = 'http://34.151.236.42:8080/file';

  private token  = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'accept': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };

  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nomeImagem', file.name);
    formData.append('imagem', file);
    console.log(formData);

    return this.http.post<any>(`${this.baseUrl}/novaimagem`, formData, this.httpOptions2);
  }
}
