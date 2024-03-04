import { Component, Input} from '@angular/core';
import { Service } from '../service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-value-propertie',
  templateUrl: './value-propertie.component.html',
})
export class ValuePropertieComponent {
  inscricao:Subscription | undefined;
  value: string = '';

  constructor(private Service:Service) { 
    this.inscricao = this.Service.valorPropriedadeSubject.subscribe(valuePropertie =>{
      this.value = valuePropertie
    })
  }

  checkValue(){
    if(this.value == "")
      return false;

    return true;
  }
}