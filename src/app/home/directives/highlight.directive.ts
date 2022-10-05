import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { withRouterConfig } from '@angular/router';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

//Capturar eventos para decorar nuestra página
@HostListener('mouseenter') onMouseEnter() {  //El mouse esta sobre el texto
  this.highlight(this.appHighlight || this.defaultColor || this.textColor ||'white');
}

@HostListener('mouseleave') onMouseLeave() { //El mouse esta fuera del texto
  this.highlight('');
}

private highlight(color: string) { //El color del bloque al ocurrir el evento
  this.el.nativeElement.style.backgroundColor = color;
  
}

@Input() appHighlight = '';
@Input() defaultColor = '';
@Input() textColor = '';
constructor(
  private el: ElementRef) { //ElementRef --> Representacion de un elemento del DOM
    
  }

}



