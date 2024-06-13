import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Marca } from '../../models/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  // private baseUrl = 'http://localhost:8080/marca';
  private baseUrl = 'http://172.19.0.4:8080/marca';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.baseUrl, this.httpOptions).pipe(
      tap(marcas => console.log(marcas)));
  }

  insert(nome: string): Observable<any> {
    return this.http.post<Marca>(this.baseUrl, {nome}, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Marca> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Marca>(url, this.httpOptions);
  }

  update(id: number, p: Marca): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch(url, p, this.httpOptions);
  }
}
