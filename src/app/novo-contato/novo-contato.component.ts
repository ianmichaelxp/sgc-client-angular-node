import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent {

  @Output() aoSalvar = new EventEmitter<any>();
  nome: string;
  sobrenome: string;
  email: string;
  numero: string;

  salvar(){
    console.log('novo');
    const contato = { nome: this.nome, sobrenome: this.sobrenome, email: this.email, numero: this.numero };
    this.aoSalvar.emit(contato);

    this.limparCampos();
  }

  limparCampos(){
    this.nome = "";
    this.sobrenome = "";
    this.email = "";
    this.numero = "";
  }
}
