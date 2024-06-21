import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from '../../models/bike.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private token  = localStorage.getItem('token');

  // private baseUrl = 'http://localhost:8080/bike';
  private baseUrl = 'http://34.151.236.42:8080/bike';

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

  getAll(page:number, pageSize:number): Observable<Bike[]> {
    console.info(this.httpOptions);
    return this.http.get<Bike[]>(`${this.baseUrl}/admin/${page}/${pageSize}`, this.httpOptions);
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  insert(p: Bike): Observable<Bike> {
    return this.http.post<Bike>(this.baseUrl, p, this.httpOptions);
  }

  update(id: number, bike: Bike): Observable<Bike> {
    const url = `${this.baseUrl}/update/${id}`;
    return this.http.put<Bike>(url, bike, this.httpOptions);
  }

  delete(id: number): Observable<any> {
    const url = `${this.baseUrl}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  getByIdAdmin(id: number): Observable<Bike> {
    const url = `${this.baseUrl}/admin/${id}`;
    return this.http.get<Bike>(url, this.httpOptions);
  }
  getById(id: number): Observable<Bike> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Bike>(url, this.httpOptions);
  }
}
