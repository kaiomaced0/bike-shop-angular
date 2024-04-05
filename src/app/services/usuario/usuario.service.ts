import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseUrl = '/usuario';

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjM0NDcyMSwiaWF0IjoxNzEyMjU4MzIxLCJqdGkiOiI3MmVkZGQyYi0zNzI4LTRkMTItYWJjMS1hYzYzOThjODQzZDUifQ.iuzkjO-ny2AE1wzDKEdfgQvwkNgJy3822l3_jqFmEonKzfXdhKWjUedsSEtt1OeRsZK2YWXcP84187BEv2PZBXiHh29Jau8IDh995uaLWSkmO2gaPxeFy_9F2pss3CHKihdhTcic2bGAjXRxyJYSLblVPcO8ua3p4CjS2UHpXloo5ztRycapHmmykmXds8goIs8FdPfSWaqaLsaL6-TpAnr9iOtvIEYKYggRZz1d_yfaSc9MNzEqeozcu4wZYuqETlT1GgHV7nJuUpwTTGL6pmYXjxof32U6B82TzgFqy0p6bSkLadaiW8YQ3yG9ZHZVeB2Fh3uTupT4bpy5hmtHNA'})
  };

  getAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl, this.httpOptions);
  }

  resetarSenha(id: number): Observable<any> {
    const url = `${this.baseUrl}/resetarsenha/${id}`;
    return this.http.patch(url, this.httpOptions);
  }

  insert(p: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, p, this.httpOptions);
  }
}
