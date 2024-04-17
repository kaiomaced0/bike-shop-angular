import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token!: string;

  constructor(private http: HttpClient) {}


  login(username: string, password: string): Observable<boolean> {
    return this.http.post<{token: string}>('/auth', { username, password })
      .pipe(
        map(response => {
          const token = response.token;
          if (token) {
            this.token = token;
            localStorage.setItem('token', token);
            return true;
          } else {
            return false;
          }
        })
      );
  }

  getToken(): string {
    return this.token;
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem('token');
  }
}
