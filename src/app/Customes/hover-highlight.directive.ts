
import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1.1)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '');
    this.renderer.setStyle(this.elementRef.nativeElement, 'transform', 'scale(1)');
  }
}
