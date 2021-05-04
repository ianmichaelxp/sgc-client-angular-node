import { ContatoService } from './services/contato.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sgc-app';
//  contatos: any[] = [];

  constructor(private service: ContatoService) {}

  salvar($event) {
    this.service.adicionar($event);
  }
}
