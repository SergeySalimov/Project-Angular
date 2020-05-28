import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CatalogNavigationService } from '../catalog-service/catalog-navigation.service';

@Component({
  selector: 'app-button-go-top',
  templateUrl: './button-go-top.component.html',
  styleUrls: ['./button-go-top.component.scss']
})
export class ButtonGoTopComponent{

  @ViewChild('goTop', {static: true}) goTop: ElementRef;

  @HostListener('window:scroll', ['$event']) onWindowScroll(): void {
    (window.scrollY > 1000) ? (this.goTop.nativeElement as HTMLElement).classList.add('show') :
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
