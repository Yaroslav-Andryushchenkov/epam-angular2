import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
  @Input('color') highlightColor: string;
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'yellow';//this.highlightColor;
  }
}
