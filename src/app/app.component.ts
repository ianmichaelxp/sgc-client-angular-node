import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sgc-app';
  contatos: any[] = [];

  salvar($event) {
    console.log($event);
    this.contatos.push($event);
  }
}
