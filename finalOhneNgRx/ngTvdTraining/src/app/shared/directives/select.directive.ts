import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[appSelect]' })
export class SelectDirective {
  @Input() backgroundColor: string;

  @HostBinding('class.selected') isSelected = false;

  constructor(private el: ElementRef, private renderer2: Renderer2) {}

  @HostListener('dblclick')
  doubleClick() {
    this.renderer2.setStyle(this.el.nativeElement, 'backgroundColor', this.backgroundColor);
  }

  // @HostListener('mouseover')
  // @HostListener('mouseleave')
  @HostListener('click')
  setSelected() {
    this.isSelected = !this.isSelected;
  }
}
