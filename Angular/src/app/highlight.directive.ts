import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective { 
  constructor(private el: ElementRef) { }
  @Input('appHighlight') highlightColor: string; 
  @HostListener('mouseenter') onMouseEnter() { //when mouse hovers on the element
    this.highlight(this.highlightColor || '#9400D3'); //default color is purple
  }

  @HostListener('mouseleave') onMouseLeave() { 
    this.highlight(null); //when mouse is removed
  }
  
  private highlight(color: string) { 
    this.el.nativeElement.style.backgroundColor = color;
  }
}