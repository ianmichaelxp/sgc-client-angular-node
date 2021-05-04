import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovoContatoComponent } from './novo-contato/novo-contato.component';
import { FormsModule } from '@angular/forms';
import { ListaContatosComponent } from './lista-contatos/lista-contatos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NovoContatoComponent,
    ListaContatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
