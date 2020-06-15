import { Component, Input } from '@angular/core';
import { OldProduct, ProductsService } from '../../../../../shared';

@Component({
  selector: 'app-button-show',
  template: `
    <button mat-button class="mx-auto" [disabled]="!product.photos?.length" (click)="showPhotos(product)">
      <span *ngIf="!!product.photos?.length; else noPhoto"><i class="icon-camera mr-1"></i>Посмотреть</span>
      <ng-template #noPhoto>Нет фотографий</ng-template>
    </button>
  `,
  styleUrls: ['./button-show.component.scss']
})
export class ButtonShowComponent {
  @Input() product: OldProduct;
  constructor(private productsService: ProductsService) {}
  showPhotos(product: OldProduct) {
      this.productsService.setModalStatus({product, show: 'carousel'});
  }
}
