import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent {

  @Output() aoSalvar = new EventEmitter<any>();
  primeiroNome: string;
  ultimoNome: string;
  email: string;
  telefone: string;

  salvar(){
    console.log('novo');
    const contato = { primeiroNome: this.primeiroNome, ultimoNome: this.ultimoNome, email: this.email, telefone: this.telefone };
    this.aoSalvar.emit(contato);

    this.limparCampos();
  }

  limparCampos(){
    this.primeiroNome = "";
    this.ultimoNome = "";
    this.email = "";
    this.telefone = "";
  }
}
