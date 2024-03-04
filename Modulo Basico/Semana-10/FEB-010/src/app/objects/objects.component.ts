import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
})
export class ObjectsComponent {
  inscricao:Subscription | undefined;
  value: any[] = [];

  constructor(private Service:Service) { 
    this.inscricao = this.Service.objetosSubject.subscribe(objetos =>{
      this.value = objetos
    })
  }

  sendObject(objeto: string){
    this.Service.selecionarObjeto(objeto);
  }
}

