import { Directive, ElementRef, HostListener Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
  @Input('color') highlightColor: string;
  constructor(private el: ElementRef) {
  }
  public ngOnInit() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }
}


