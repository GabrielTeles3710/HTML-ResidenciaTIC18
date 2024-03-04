import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextTitleDirective]'
})
export class TextTitleDirectiveDirective {

    constructor(private element: ElementRef, private renderer: Renderer2)
    { 
      this.renderer.setStyle(element.nativeElement, 'font-weight', 'bold');
    }
}