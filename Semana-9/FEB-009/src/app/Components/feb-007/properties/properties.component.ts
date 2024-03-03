import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
})
export class PropertiesComponent {
  @Input() value: any[] = [];
  @Output() eventSend: EventEmitter<string> = new EventEmitter<string>;

  sendPropertie(properties: string){
    this.eventSend.emit(properties);
  }
}