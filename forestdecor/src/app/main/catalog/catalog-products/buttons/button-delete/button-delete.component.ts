import { Component } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  template: `
   <button mat-button class="mx-auto" color="warn">
            <span><i class="icon-camera mr-1"></i>Удалить</span>
          </button>
  `,
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent {}
