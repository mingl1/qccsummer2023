import { Directive, HostListener,ElementRef } from '@angular/core';

@Directive({
  selector: '[appEmail]'
})
export class EmailDirective {

  constructor(private element:ElementRef) {}
  @HostListener('focus') onFocus(){
    console.log("Focus");
 }
 @HostListener('blur') onBlur(){
    let v:string = this.element.nativeElement.value;
    if (!v.includes('@')) {
      this.element.nativeElement.value = v + '@gmail.com';
    }
    else{
      this.element.nativeElement.value = v.toUpperCase();
    }
  }
}