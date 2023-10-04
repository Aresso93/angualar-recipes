import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeat]',
  standalone: true
})
export class RepeatDirective {

  //@Input() appRepeat?: number;
//posso riscrivere quest'input come un setter (rivedere setter/getter):

@Input() set appRepeat(value: number){
  console.log(value);
  //questo input è come se fosse una funzione che in questo momento mi restituisce il valore (printa un 5 che era nell'HTML della card)

  for (let i = 0; i < value; i++) {
    this.viewContainer.createEmbeddedView(this.template)

  }
}

  constructor(private viewContainer: ViewContainerRef, private template: TemplateRef<any>) {}

}
