import { Component, Input } from '@angular/core';
import { Product } from '../../../../../shared';

@Component({
  selector: 'app-button-show',
  template: `
    <button mat-button class="mx-auto" [disabled]="!product.photos?.length">
      <span *ngIf="!!product.photos?.length; else noPhoto"><i class="icon-camera mr-1"></i>Посмотреть</span>
      <ng-template #noPhoto>Нет фотографий</ng-template>
    </button>
  `,
  styleUrls: ['./button-show.component.scss']
})
export class ButtonShowComponent {
  @Input() product: Product;
}
