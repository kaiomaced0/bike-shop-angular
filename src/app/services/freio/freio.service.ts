import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Freio } from '../../models/freio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreioService {

  private baseUrl = 'http://localhost:8080/freio';
  // private baseUrl = 'http://34.151.236.42:8080/freio';

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

  getAll(page:number, pageSize:number): Observable<Freio[]> {
    return this.http.get<Freio[]>(`${this.baseUrl}/${page}/${pageSize}`, this.httpOptions);
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  insert(nome: string): Observable<any> {
    return this.http.post<Freio>(this.baseUrl, {nome}, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Freio> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Freio>(url, this.httpOptions);
  }

  update(id: number, p: Freio): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.patch(url, p, this.httpOptions);
  }
}
