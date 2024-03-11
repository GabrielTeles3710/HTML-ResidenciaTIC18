import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formEvents: any = [];
  valueChanges(value: string){
    this.formEvents.push('Value change: ' + value)
    console.log(this.formEvents);
  }
  statusChanges(status: string){
    this.formEvents.push('Status change: ' + status)
    console.log(this.formEvents);
  }
}
