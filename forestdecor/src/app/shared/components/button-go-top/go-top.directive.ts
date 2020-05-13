import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGoTop]'
})
export class GoTopDirective {

  @HostListener('window:scroll', ['$event']) onWindowScroll(): void {
    (window.scrollY > 1000) ? (this.element.nativeElement as HTMLElement).classList.add('show') :
      (this.element.nativeElement as HTMLElement).classList.remove('show');
    // const offsetHeight = (this.element.nativeElement as HTMLElement).offsetTop;
  }

  @HostListener('click') onClick():void {
    let topScroll = window.scrollY;
    let iteration = Math.round(topScroll / 60);
    let intervalId = setInterval(() => {
      window.scrollTo(0, topScroll);
      topScroll -= iteration;
      if (topScroll < iteration) {
        window.scrollTo(0, 0);
        clearInterval(intervalId);
      }
    }, 1000 / 60)
  }

  constructor(public element: ElementRef) { }
}
