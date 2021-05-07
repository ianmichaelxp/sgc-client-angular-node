import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato, RootObject } from '../models/contato.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private url = 'https://sgc-contatos.herokuapp.com/api/contatos';

  constructor(private httpClient: HttpClient) {}

  buscarTodosPageable():Observable<RootObject>{
    return this.httpClient.get<RootObject>(this.url);
  }

  cadastrarPageable(contato: Contato) {
    return this.httpClient.post<Contato>(this.url, contato);
  }

  excluirContato(id: number){
    return this.httpClient.delete<Contato>(this.url.concat(`/${id}`));
  }
}
