import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Marca } from '../../models/marca.model';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  // private baseUrl = 'http://localhost:8080/marca';
  private baseUrl = 'http://34.151.236.42:8080/marca';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };
  httpOptions3 = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.baseUrl, this.httpOptions).pipe(
      tap(marcas => console.log(marcas)));
  }
  getAllAdmin(page:number, pageSize:number): Observable<Marca[]> {
    return this.http.get<Marca[]>(`${this.baseUrl}/admin/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(marcas => console.log(marcas)));
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  insert(nome: string): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('nome', nome);
    return this.http.post<Marca>(this.baseUrl, formData, this.httpOptions);
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
