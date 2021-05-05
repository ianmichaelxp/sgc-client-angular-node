import { Contato, Pageable, RootObject } from './../models/contato.model';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {

  contatos: Contato[];
  pageable: RootObject;

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    // this.service.buscarTodos().subscribe((contatos: Contato[]) => {
    //   console.table(contatos);
    //   this.contatos = contatos;
    // });
    this.service.buscarTodosPageable().subscribe((contatos) => {
      // console.table(contatos);
      this.pageable = contatos;
      this.contatos = contatos.content;
    });
  }
}
