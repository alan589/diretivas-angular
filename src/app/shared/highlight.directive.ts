import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') noMouseAcima(){
    this.bgColor = this.highlightColor;
  }
  @HostListener('mouseout') noMouseFora(){

    this.bgColor = this.defaultColor;
  }

  @HostBinding('style.backgroundColor') bgColor: string = "";

  @Input('highlight') highlightColor: string = 'lightblue';
  @Input() defaultColor: string = 'white';

  ngOnInit(){
    this.bgColor = this.defaultColor;
  }
  constructor() { }

}
