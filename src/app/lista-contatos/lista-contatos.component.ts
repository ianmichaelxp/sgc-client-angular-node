import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-contatos',
  templateUrl: './lista-contatos.component.html',
  styleUrls: ['./lista-contatos.component.scss']
})
export class ListaContatosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() contatos: any[];

}
