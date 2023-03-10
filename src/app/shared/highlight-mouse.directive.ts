import { Directive, HostListener, ElementRef, Renderer2, HostBinding} from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') noMouseAcima(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
    this.bgColor = 'lightblue';
  }
  @HostListener('mouseout') noMouseFora(){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '');
    this.bgColor = '';
  }

  //método 1
  // @HostBinding('style.backgroundColor') bgColor: string = "";

  //método 2
  //métodos setters e getters do typescript
  //com isso é possível manipular algum código antes de setar o background propriemente dito
  @HostBinding('style.backgroundColor') get setColor(){
    // código extra
    return this.bgColor;
  }

  private bgColor: string = "";

  constructor(
    //private elementRef: ElementRef,
    //private renderer: Renderer2
  ) { }

}
