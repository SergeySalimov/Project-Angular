import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-close',
  template: `
    <button mat-button mat-icon-button aria-label="Clear">
      <mat-icon>close</mat-icon>
    </button>
  `,
  styleUrls: ['./btn-close.component.scss']
})
export class BtnCloseComponent {
  constructor() { }
}
