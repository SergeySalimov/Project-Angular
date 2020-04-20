import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSetHeight]'
})
export class SetHeightDirective implements OnInit, AfterViewInit {

  constructor(public element: ElementRef, public renderer: Renderer2) { }

  // @HostListener('click', ['$event']) onMouseEnter(event: MouseEvent): void {
    // console.dir((event.target as HTMLElement).innerText);
    // console.log('in');
  // }

  @HostBinding('style.height') get height() {
    return '700px';
  }

  ngOnInit(): void {
    // console.log((this.element.nativeElement as HTMLElement).clientHeight);
    // const elHeight = (this.element.nativeElement as HTMLElement).clientHeight;
    // this.renderer.setStyle(this.element.nativeElement, 'height', elHeight);
    // this.renderer.setStyle(this.element.nativeElement, 'height', `${elHeight * 2}px`);
  }

  ngAfterViewInit(): void {
    console.log((this.element.nativeElement as HTMLElement).clientHeight);
  }



}
