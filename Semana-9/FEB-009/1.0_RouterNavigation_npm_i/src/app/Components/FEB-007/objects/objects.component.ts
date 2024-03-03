import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
})
export class ObjectsComponent {
  @Input() value: any[] = [];
  @Output() eventSend: EventEmitter<string> = new EventEmitter<string>;

  sendObject(object: string){
    this.eventSend.emit(object);
  }
}

