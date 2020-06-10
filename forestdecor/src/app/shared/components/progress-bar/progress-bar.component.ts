import { Component } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="upload-progress" *ngIf="(uploadProgress$ | async) > 0">
<!--      <span class="h6">PROGRESS<i class="icon-thumbs-up" *ngIf="(uploadProgress$ | async) === 100"></i></span>      -->
      <mat-progress-bar mode="determinate" [value]="(uploadProgress$ | async)"></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
 constructor(private productsService: ProductsService) { }
 uploadProgress$ = this.productsService.uploadProgress;
}
