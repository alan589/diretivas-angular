import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  // caso queira aplicar a somente um elemento ou componente deve se colocar o seletor do elemento/componente
  // antes dos colchetes, ex: button[FundoAzulClaro]
  selector: '[FundoAzulClaro]'
})
export class FundoAzulClaroDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    //console.log(this.elementRef);
    // não é aconselhavel por questões de segurança
    // this.elementRef.nativeElement.style.backgroundColor = "lightblue";
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');

  }

}
