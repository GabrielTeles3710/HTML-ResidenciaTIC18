import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBodyDirective]'
})
export class BodyDirectiveDirective {

  constructor(private element: ElementRef, private renderer: Renderer2)
  { 
    this.renderer.setStyle(element.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(element.nativeElement, 'height', '40px');
    this.renderer.setStyle(element.nativeElement, 'width', '200px');
    this.renderer.setStyle(element.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(element.nativeElement, 'margin-top', '10px');
    this.renderer.setStyle(element.nativeElement, 'background-color', 'rgb(255,165,0)');
    this.renderer.setStyle(element.nativeElement, 'display', 'flex');
    this.renderer.setStyle(element.nativeElement, 'align-items', 'center');
    this.renderer.setStyle(element.nativeElement, 'justify-content', 'center');
  }
}