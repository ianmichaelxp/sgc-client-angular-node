import { Contato, Telefone } from './../models/contato.model';
import { ContatoService } from './../services/contato.service';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo-contato',
  templateUrl: './novo-contato.component.html',
  styleUrls: ['./novo-contato.component.scss']
})
export class NovoContatoComponent implements OnInit{

  @Output() aoSalvar = new EventEmitter<any>();
  primeiroNome: string;
  ultimoNome: string;
  email: string;
  telefones: Telefone[];

  constructor(private contatoService: ContatoService, private router: Router){};

  ngOnInit(): void {
    this.telefones = [{
      "numero":""
    }];
  }

  salvar(){
    console.log('novo');
    const contato: Contato = { primeiroNome: this.primeiroNome, ultimoNome: this.ultimoNome, email: this.email, telefones: this.telefones };

    this.contatoService.cadastrarPageable(contato).subscribe(res => {
      console.log(res);
      this.limparCampos();
      this.router.navigateByUrl('lista-contatos');
    }, error => console.error(error));

    // this.contatoService.cadastrarPageable(contato).subscribe(res => {
    //   console.log(res);
    //   this.limparCampos();
    //   this.router.navigateByUrl('lista-contatos');
    // }, error => console.error(error));

  }

  limparCampos(){
    this.primeiroNome = "";
    this.ultimoNome = "";
    this.email = "";
    this.telefones = [{
      "numero":""
    }];
  }
}
