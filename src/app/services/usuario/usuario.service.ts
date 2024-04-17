import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = '/pessoafisica';

  constructor(private http: HttpClient) { }

  private token  = localStorage.getItem('token');

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + this.token})
  };
  httpOptions2 = {
    headers: new HttpHeaders({'Authorization': 'Bearer ' + this.token})
  };


  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl, this.httpOptions);
  }

  resetarSenha(id: number): Observable<any> {
    const url = `/usuario/resetarsenha/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  insert(p: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('/usuario', p, this.httpOptions);
  }

  getById(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url, this.httpOptions);
  }

  update(id: number, usuario: Usuario): Observable<any> {
    const url = `/usuario/${id}`;
    return this.http.put(url, usuario, this.httpOptions);
  }
  delete(id: number): Observable<any> {
    const url = `/usuario/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }
}
