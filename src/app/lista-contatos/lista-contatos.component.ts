import { Router } from '@angular/router';
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

  constructor(private service: ContatoService, private router: Router) {}

  ngOnInit(): void {
    this.service.buscarTodos().subscribe((contatos: Contato[]) => {
      console.table(contatos);
      this.contatos = contatos;
    });

    // this.service.buscarTodosPageable().subscribe((contatos) => {
    //   // console.table(contatos);
    //   this.pageable = contatos;
    //   this.contatos = contatos.content;
    // });
  }

  onDelete(id: number){
    console.log(id);
    this.service.excluirContato(id).subscribe(() => {
      this.service.buscarTodos().subscribe((contatos: Contato[]) => {
        console.table(contatos);
        this.contatos = contatos;
      });
    },
    (error) => console.error(error));
  }
}
