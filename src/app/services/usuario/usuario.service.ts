import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  // private baseUrl = 'http://localhost:8080/pessoafisica';
  private baseUrl = 'http://34.151.236.42:8080/pessoafisica';
  // private baseUrl2 = 'http://localhost:8080/usuario';
  private baseUrl2 = 'http://34.151.236.42:8080/usuario';

  constructor(private http: HttpClient) { }

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


  getAll(page:number, pageSize:number): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.baseUrl}/${page}/${pageSize}`, this.httpOptions);
  }
  count(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/count`,this.httpOptions3);
  }

  resetarSenha(id: number): Observable<any> {
    const url = `${this.baseUrl2}/resetarsenha/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }

  insert(p: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl2, {
      "cpf": p.cpf,
      "nome": p.nome,
      "login": p.login,
      "senha": p.senha,
      "email": p.email,
      "dataNascimento": p.dataNascimento
    }, this.httpOptions3);
  }

  getById(id: number): Observable<Usuario> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Usuario>(url, this.httpOptions);
  }

  update(id: number, usuario: Usuario): Observable<any> {
    const url = `${this.baseUrl2}/${id}`;
    return this.http.put(url, usuario, this.httpOptions);
  }
  delete(id: number): Observable<any> {
    const url = `${this.baseUrl2}/delete/${id}`;
    return this.http.patch(url, null, this.httpOptions2);
  }
}
