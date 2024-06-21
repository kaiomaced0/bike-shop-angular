import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ferramenta } from '../../models/ferramenta.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FerramentaService {

  // private baseUrl = 'http://localhost:8080/ferramenta';
  private baseUrl = 'http://34.151.236.42:8080/ferramenta';

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

  getAll(page:number, pageSize:number): Observable<Ferramenta[]> {
    return this.http.get<Ferramenta[]>(`${this.baseUrl}/admin/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(ferramentas => console.log(ferramentas)));
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  insert(f: Ferramenta): Observable<Ferramenta> {
    return this.http.post<Ferramenta>(this.baseUrl, f, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Ferramenta> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Ferramenta>(url, this.httpOptions);
  }

  update(id: number, p: Ferramenta): Observable<any> {
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put(url, p, this.httpOptions);
  }
}
