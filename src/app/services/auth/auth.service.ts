import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = '/auth';

  constructor(private http: HttpClient) { }

  private token = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };


  login(login: string, senha: string): Observable<any> {
    const body = { login, senha };
    return this.http.post<any>(this.baseUrl, body, { observe: 'response' }).pipe(tap(response => {
      if (response.status === 200) {
        const token = response.headers.get('Authorization');
        if (token) {
          localStorage.setItem('token', token);
        }
      }
    }))
}

}
