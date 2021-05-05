import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato } from '../models/contato.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private listaContatos: any[];
  private url = 'http://localhost:3000/content';

  constructor(private httpClient: HttpClient) {
    this.listaContatos = [];
  }

  get contatos(){
    return this.listaContatos;
  }

  buscarTodos():Observable<Contato[]>{
    return this.httpClient.get<Contato[]>(this.url);
  }

  cadastrar(contato: Contato) {

    return this.httpClient.post<Contato>(this.url, contato);
  }

  adicionar(contato: any) {
    this.listaContatos.push(contato);
  }

}
