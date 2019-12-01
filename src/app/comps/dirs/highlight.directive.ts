import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;
  @Input('enlarge') enlarge: boolean;
  
  private el: HTMLElement;

  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    console.log('HighlightDirective');
  }

  @HostListener('click') shukiHalachLaYam() {
    alert('hey, u clikced me ' + this.el.textContent)
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
    if (!color) {
      this.el.style.backgroundColor = 'lightgrey';
    }
    if (this.enlarge) {
      this.el.style.fontSize = '1.5em';
    }
  }

}
