import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appClicker]'
})
export class ClickerDirective {

  @HostListener('click')
  public appClicker() {
    console.log('You clicked a thing');
  }

  constructor() { }

}
