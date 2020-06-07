import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { CatalogNavigationService } from '../../../main/catalog/catalog-service/catalog-navigation.service';

@Component({
  selector: 'app-button-go-top',
  templateUrl: './button-go-top.component.html',
  styleUrls: ['./button-go-top.component.scss']
})
export class ButtonGoTopComponent{

  @Input() heightOfShow: number = 1000;
  @ViewChild('goTop', {static: true}) goTop: ElementRef;

  @HostListener('window:scroll', ['$event']) onWindowScroll(): void {
    (window.scrollY > this.heightOfShow) ? (this.goTop.nativeElement as HTMLElement).classList.add('show') :
      (this.goTop.nativeElement as HTMLElement).classList.remove('show');
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
    }, 1000 / 60);
  }

  constructor(public catalogNavigation: CatalogNavigationService) {
  }
}
