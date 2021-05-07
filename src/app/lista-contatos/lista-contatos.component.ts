import { Router } from '@angular/router';
import { Contato, RootObject } from './../models/contato.model';
import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss'],
})
export class ListaContatosComponent implements OnInit {
  contatos: Contato[];
  pageable: RootObject;

  constructor(private service: ContatoService, private router: Router) {}

  ngOnInit(): void {
    this.service.buscarTodosPageable().subscribe(
      (contatos) => {
        console.table(contatos);
        this.pageable = contatos;
        this.contatos = contatos.content;
      },
      (error) => console.error(error)
    );
  }

  onDelete(id: number) {
    this.service.excluirContato(id).subscribe(
      () => {
        this.service.buscarTodosPageable().subscribe((contatos) => {
          this.pageable = contatos;
          this.contatos = contatos.content;
        });
      },
      (error) => console.error(error)
    );
  }
}
