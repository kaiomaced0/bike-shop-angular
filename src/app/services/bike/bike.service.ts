import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bike } from '../../models/bike.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  private token  = localStorage.getItem('token');

  private baseUrl = '/bike';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Bike[]> {
    console.info(this.httpOptions);
    return this.http.get<Bike[]>(this.baseUrl+'/admin', this.httpOptions);
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

  getById(id: number): Observable<Bike> {
    const url = `${this.baseUrl}/admin/${id}`;
    return this.http.get<Bike>(url, this.httpOptions);
  }
}
