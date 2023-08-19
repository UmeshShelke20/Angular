import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseEffect]'
})
export class MouseEffectDirective {
  @Input() appMouseEffect = '';
  @Input() defaultColor = '';
  constructor(private el: ElementRef) { }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('yellow');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('Green');
  // }
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  // color = '';
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appMouseEffect|| 'red');
  // }
  // private highlight(color: string) {
  //   this.el.nativeElement.style.backgroundColor = color;
  // }
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight(this.appMouseEffect || 'red');
  // }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appMouseEffect || this.defaultColor || 'red');
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
