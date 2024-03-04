import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTextContentDirective]'
})
export class TextContentDirectiveDirective {

  constructor(private element: ElementRef, private renderer: Renderer2)
  { 
    this.renderer.setStyle(element.nativeElement, 'font-size', 'large');
    this.renderer.setStyle(element.nativeElement, 'font-weight', 'bold');
    this.renderer.setStyle(element.nativeElement, 'color', 'rgb(255, 255, 255');
  }
}