import { HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { Produto } from '../../models/produto.model';
import { ProdutoDTO } from '../../dto/produto.dto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = '/produto';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJ1bml0aW5zLWp3dCIsInN1YiI6ImthaW8iLCJncm91cHMiOlsiVXNlciIsIkFkbWluIl0sImV4cCI6MTcxMjM0NDcyMSwiaWF0IjoxNzEyMjU4MzIxLCJqdGkiOiI3MmVkZGQyYi0zNzI4LTRkMTItYWJjMS1hYzYzOThjODQzZDUifQ.iuzkjO-ny2AE1wzDKEdfgQvwkNgJy3822l3_jqFmEonKzfXdhKWjUedsSEtt1OeRsZK2YWXcP84187BEv2PZBXiHh29Jau8IDh995uaLWSkmO2gaPxeFy_9F2pss3CHKihdhTcic2bGAjXRxyJYSLblVPcO8ua3p4CjS2UHpXloo5ztRycapHmmykmXds8goIs8FdPfSWaqaLsaL6-TpAnr9iOtvIEYKYggRZz1d_yfaSc9MNzEqeozcu4wZYuqETlT1GgHV7nJuUpwTTGL6pmYXjxof32U6B82TzgFqy0p6bSkLadaiW8YQ3yG9ZHZVeB2Fh3uTupT4bpy5hmtHNA'})
  };

  constructor(private httpClient: HttpClient) { }

  list(){
    return this.httpClient.get<Produto[]>(this.apiUrl+'/admin', this.httpOptions).pipe(
      tap(produtos => console.log(produtos))
    );
  }
  getProdutos(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.apiUrl, this.httpOptions);
  }
  insert(p: ProdutoDTO): Observable<ProdutoDTO> {
    return this.httpClient.post<ProdutoDTO>(this.apiUrl, p, this.httpOptions);
  }
  delete(id: number): void {
    const url = `${this.apiUrl}/delete/${id}`;
    this.httpClient.put(url, this.httpOptions);
  }
}
