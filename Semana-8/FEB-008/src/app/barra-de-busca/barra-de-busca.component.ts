import { Component, Output, EventEmitter, input } from '@angular/core';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
})
export class BarraDeBuscaComponent {
  
  palavrasChave : string = '';
   @Output() eventoEnviar: EventEmitter<string> = new EventEmitter<string>;
  enviarPalavrasChave(){
    this.eventoEnviar.emit(this.palavrasChave);
  }
}
