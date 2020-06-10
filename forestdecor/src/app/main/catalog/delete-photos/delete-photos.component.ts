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

  photosUrls: string[] = [];
  selectedIndex: number[] = [];
  productsSubscr: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscr = this.productsService.showInCatalog.subscribe( (data: Show) => {
      this.photosUrls = data?.product?.photos[0].urlList;
    });
  }

  closeWindow() {
    this.productsService.setModalStatus(null);
  }

  clickONPhoto(i: number) {
    this.selectedIndex.indexOf(i) === -1 ? this.selectedIndex.push(i) :
      this.selectedIndex = this.selectedIndex.filter(number => number !== i);
  }

  deleteSelected() {
    console.log(this.selectedIndex);
    this.selectedIndex = [];
  }

  ngOnDestroy(): void {
    this.productsSubscr.unsubscribe();
  }

}
