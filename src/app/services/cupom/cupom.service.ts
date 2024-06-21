import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cupom } from '../../models/cupom.model';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CupomService {

  // private baseUrl = 'http://localhost:8080/cupom';
  private baseUrl = 'http://34.151.236.42:8080/cupom';

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

  getAll(page:number, pageSize:number): Observable<Cupom[]> {
    return this.http.get<Cupom[]>(`${this.baseUrl}/${page}/${pageSize}`, this.httpOptions).pipe(
      tap(cupom => console.log(cupom)));
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  insert(Cupom: Cupom): Observable<Cupom> {
    return this.http.post<Cupom>(this.baseUrl, Cupom, this.httpOptions);
  }


  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Cupom> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Cupom>(url, this.httpOptions);
  }

  update(id: number, p: Cupom): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put(url, p, this.httpOptions);
  }
}
