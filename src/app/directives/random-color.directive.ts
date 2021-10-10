import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRandomColor]'
})
export class RandomColorDirective {
  colors = [
    'yellow',
    'red',
    'blue',
    'pink',
    'deepskyblue',
    'aquamarine',
    'brown',
    'cadetblue',
    'darkgoldenrod',
    'cyan'
  ];
  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;
  @HostListener('keydown') setColor() {
    this.color = this.borderColor = this.colors[Math.floor(Math.random() * this.colors.length)];
  }
  constructor() { }

}
