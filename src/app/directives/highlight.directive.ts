import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') inputColor: string;

  @HostBinding('class.active') isHovering: boolean;
  @HostListener('mouseover') onMouseOver() {
    this.isHovering = true;
    this.changeColor(this.inputColor || 'pink');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isHovering = false;
    this.changeColor('blue');
  }
  constructor(private el: ElementRef, private render: Renderer2) {
    //el.nativeElement.style.backgroundColor = 'green';
    //render.setStyle(el.nativeElement, 'backgroundColor', 'pink')
  }

  changeColor(color: string) {
    this.render.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
