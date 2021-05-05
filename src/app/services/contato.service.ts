import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contato, Pageable, RootObject } from '../models/contato.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private listaContatos: any[];
  private url = 'http://localhost:8080/api/contatos';

  constructor(private httpClient: HttpClient) {
    this.listaContatos = [];
  }

  get contatos(){
    return this.listaContatos;
  }

  buscarTodos():Observable<Contato[]>{
    return this.httpClient.get<Contato[]>(this.url);
  }

  buscarTodosPageable():Observable<RootObject>{
    return this.httpClient.get<RootObject>(this.url);
  }

  cadastrarPageable(contato: Contato) {

    return this.httpClient.post<Contato>(this.url, contato);
  }


  // cadastrar(contato: Contato) {

  //   return this.httpClient.post<Contato>(this.url, contato);
  // }

  adicionar(contato: any) {
    this.listaContatos.push(contato);
  }

}
