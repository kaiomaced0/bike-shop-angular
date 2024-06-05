import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categoria } from '../../models/categoria.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  // private baseUrl = 'http://localhost:8080/categoria';
  private baseUrl = 'https://34.151.200.157:8443/categoria';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.baseUrl, this.httpOptions).pipe(
      tap(categoria => console.log(categoria)));
  }

  insert(nome: string): Observable<any> {
    return this.http.post<Categoria>(this.baseUrl, {nome}, this.httpOptions);
  }

  update(id: number, categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch<Categoria>(url, categoria, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Categoria> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Categoria>(url, this.httpOptions);
  }
}
