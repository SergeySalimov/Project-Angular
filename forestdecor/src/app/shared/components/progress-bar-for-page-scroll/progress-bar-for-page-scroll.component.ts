import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-progress-bar-for-page-scroll',
  template: `<mat-progress-bar mode="determinate" [value]="value" color="warn"></mat-progress-bar>`,
  styleUrls: ['./progress-bar-for-page-scroll.component.scss']
})
export class ProgressBarForPageScrollComponent{
  value: number = 0;
  @HostListener('window:scroll') onWindowScroll(): void {
    this.value = Math.round(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
  }
}
