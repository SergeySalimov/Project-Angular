import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-button-show',
  template: `
    <button mat-button
            class="mx-auto mt-1"
            [disabled]="!product.photos?.length"
            (click)="needPhotos(product); $event.stopPropagation()">
      <span *ngIf="!!product.photos?.length; else noPhoto"><i class="icon-camera mr-1"></i>Посмотреть</span>
      <ng-template #noPhoto>Нет фотографий</ng-template>
    </button>
  `,
  styleUrls: ['./button-show.component.scss']
})
export class ButtonShowComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  needPhotos(product: Product) {
    console.log(product);
  }

}
