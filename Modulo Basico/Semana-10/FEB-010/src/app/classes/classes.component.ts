import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Service } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent{
  inscricao:Subscription | undefined;
  value: any[] = [];

  constructor(private Service:Service) { 
    this.inscricao = this.Service.classesSubject.subscribe(classes =>{
      this.value = classes
    })
  }

  sendClass(classe: string){
    this.Service.selecionarClasse(classe);
  }
}