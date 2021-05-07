import { ContatoService } from './services/contato.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sgc-app';

  constructor(private service: ContatoService) {}

}
