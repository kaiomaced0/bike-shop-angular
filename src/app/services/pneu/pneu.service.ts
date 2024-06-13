import { Injectable } from '@angular/core';
import { Pneu } from '../../models/pneu.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PneuService {

  // private baseUrl = 'http://localhost:8080/pneu';
  private baseUrl = 'http://172.19.0.4:8080/pneu';

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };


  constructor(private http: HttpClient) { }

  getAll(): Observable<Pneu[]> {
    return this.http.get<Pneu[]>(this.baseUrl+'/admin', this.httpOptions).pipe(
      tap(pneu => console.log(pneu)));
  }

  insert(p: Pneu): Observable<Pneu> {
    return this.http.post<Pneu>(this.baseUrl, p, this.httpOptions);
  }

  update(id: number, Pneu: Pneu): Observable<Pneu> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Pneu>(url, Pneu, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getById(id: number): Observable<Pneu> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Pneu>(url, this.httpOptions);
  }
}
