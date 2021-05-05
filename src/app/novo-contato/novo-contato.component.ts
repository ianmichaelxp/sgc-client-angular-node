import { Contato } from './../models/contato.model';
import { ContatoService } from './../services/contato.service';
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

  constructor(private contatoService: ContatoService){};

  salvar(){
    console.log('novo');
    const contato: Contato = { primeiroNome: this.primeiroNome, ultimoNome: this.ultimoNome, email: this.email, telefone: this.telefone };
    this.contatoService.cadastrar(contato).subscribe(res => {
      console.log(res);
      this.limparCampos();
    }, error => console.error(error));

  }

  limparCampos(){
    this.primeiroNome = "";
    this.ultimoNome = "";
    this.email = "";
    this.telefone = "";
  }
}
