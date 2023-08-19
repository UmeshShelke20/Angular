import { style } from '@angular/animations';
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackgroundcolor]'
})
export class BackgroundcolorDirective implements OnInit{

  constructor(private  el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
  ngOnInit(): void {

  }

}
 