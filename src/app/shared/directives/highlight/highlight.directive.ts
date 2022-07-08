import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
    el: any;
    constructor(element:ElementRef) {
        this.el=element;
        element.nativeElement.style.backgroundColor = "red";
    }
    
    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('yellow');
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.highlight('');
    }
    
    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}
