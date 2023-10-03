import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSuperButton]',
  standalone: true
})
export class SuperButtonDirective {
//questa direttiva non è vincolata all'elemento cui l'ho data (in questo caso il bottone di cancellazione), significa che se per esempio la do a un div anche il div si prende queste regole

originalHTML: String = ''

@HostListener('mouseover') onMouseOver(){
  this.originalHTML = this.el.nativeElement.innerHTML;
  this.el.nativeElement.style.backgroundColor = 'red'
  this.el.nativeElement.innerHTML = 'Sei proprio sicuro?'
}

@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.backgroundColor = 'green'
  this.el.nativeElement.innerHTML = this.originalHTML
}


constructor(private el: ElementRef) {
    this.originalHTML = el.nativeElement.innerHTML
    console.log('super-button attivato');
    console.log(el);
    el.nativeElement.style.borderColor = 'crimson'
    el.nativeElement.style.borderStyle = 'dashed'
    el.nativeElement.style.backgroundColor = 'green'
    el.nativeElement.style.color = 'white'
  }

}
