import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private listaContatos: any[];

  constructor() {
    this.listaContatos = [];
  }

  get contatos() {
    return this.listaContatos;
  }

  adicionar(contato: any) {
    this.listaContatos.push(contato);
  }

}
