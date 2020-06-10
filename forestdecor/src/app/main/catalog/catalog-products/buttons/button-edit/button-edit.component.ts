import { Component } from '@angular/core';

@Component({
  selector: 'app-button-edit',
  template: `
    <button mat-button color="accent" class="mx-auto">
      <span><i class="icon-camera mr-1"></i>Редактировать</span>
    </button>
  `,
  styleUrls: ['./button-edit.component.scss']
})
export class ButtonEditComponent {}
