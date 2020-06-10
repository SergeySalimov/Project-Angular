import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared';
import { PhotoUrl } from '../../../shared/models/photo-url.model';
import { Subscription } from 'rxjs';
import { Show } from '../../../shared/models/showInCatalog';

@Component({
  selector: 'app-delete-photos',
  templateUrl: './delete-photos.component.html',
  styleUrls: ['./delete-photos.component.scss']
})
export class DeletePhotosComponent implements OnInit, OnDestroy {

  photos: PhotoUrl[] = [];
  selectedIndex: number[] = [];
  productsSubscr: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscr = this.productsService.showInCatalog.subscribe( (data: Show) => {
      this.photos = data?.product?.photos;
    });
  }

  closeWindow() {
    this.productsService.setModalStatus(null);
  }

  ngOnDestroy(): void {
    this.productsSubscr.unsubscribe();
  }

}
