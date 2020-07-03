import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar-for-page-scroll',
  template: `<mat-progress-bar mode="determinate" [value]="value" color="warn"></mat-progress-bar>`,
  styles: [`:host {
      position: absolute;
      bottom: 0;
      width: 100%;
      z-index: 9999;
  }`],
})
export class ProgressBarForPageScrollComponent{
  value: number = 0;
  @HostListener('window:scroll') onWindowScroll(): void {
    this.calculation();
  }
  @HostListener('window:click') onWindowClick(): void {
    this.calculation();
  }
  calculation(): void {
    this.value = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
  }
}
