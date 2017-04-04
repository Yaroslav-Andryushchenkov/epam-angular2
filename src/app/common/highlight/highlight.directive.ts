import { Directive, ElementRef, HostListener Input, OnInit } from '@angular/core';

@Directive({
  selector: '[highlight]'
})

export class HighlightDirective implements OnInit {
  @Input('highlight') highlightColor: string;
  constructor(private el: ElementRef) {
  }
  public ngOnInit() {
    if (this.highlightColor) {
      this.el.nativeElement.style.borderColor = this.highlightColor;
      this.el.nativeElement.style.borderWidth = '2px';
      this.el.nativeElement.style.borderStyle = 'solid';
    }
  }
}


