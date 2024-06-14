import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  // private baseUrl = 'http://localhost:8080/file';
  private baseUrl = 'http://bike-shop-api:8080/file';

  private token  = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };

  constructor(private http: HttpClient) { }

  uploadImage(file: File): Observable<string> {
    const formData: FormData = new FormData();
    formData.append('nome', file.name);
    formData.append('imagem', file);

    return this.http.post<string>(`${this.baseUrl}/novaimagem`, formData, this.httpOptions);
  }
}
