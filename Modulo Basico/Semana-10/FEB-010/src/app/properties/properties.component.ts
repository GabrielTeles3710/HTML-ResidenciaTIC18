import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../service.service';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
})
export class PropertiesComponent {
  inscricao:Subscription | undefined;
  value: any[] = [];

  constructor(private Service:Service) { 
    this.inscricao = this.Service.propriedadesSubject.subscribe(propriedades =>{
      this.value = propriedades
    })
  }

  sendPropertie(propriedade: string){
    this.Service.selecionarPropriedade(propriedade);
  }
}
