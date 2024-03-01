import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
})
export class ClassesComponent{
  @Input() value: any[] = [];
  @Output() eventSend: EventEmitter<string> = new EventEmitter<string>;

  sendClass(classe: string){
    this.eventSend.emit(classe);
  }
}