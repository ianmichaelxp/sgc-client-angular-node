import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {

  contatos: any[];

  constructor(private service: ContatoService) {}

  ngOnInit(): void {
    this.contatos = this.service.contatos;
  }

}
