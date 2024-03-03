import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-value-propertie',
  templateUrl: './value-propertie.component.html',
})
export class ValuePropertieComponent {
  @Input() value: string = '';

  checkValue(){
    if(this.value == "")
      return false;
    return true;
  }
}
