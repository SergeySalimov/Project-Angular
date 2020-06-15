import { Component, OnDestroy, OnInit } from '@angular/core';
import { OldProduct, ProductsService } from '../../../shared';
import { Subscription } from 'rxjs';
import { Show } from '../../../shared/models/showInCatalog';

@Component({
  selector: 'app-delete-photos',
  templateUrl: './delete-photos.component.html',
  styleUrls: ['./delete-photos.component.scss']
})
export class DeletePhotosComponent implements OnInit, OnDestroy {

  photosUrls: string[] | null = [];
  curProduct: OldProduct | null = null;
  selectedIndex: number[] = [];
  productsSubscr: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscr = this.productsService.showInCatalog.subscribe( (data: Show) => {
      if (!!data) {
        this.curProduct = data?.product;
        this.photosUrls = !!data.product.photos ? data.product?.photos[0].urlList : [];
      } else {
        this.curProduct = null;
        this.photosUrls = [];
      }
    });
  }

  closeWindow() {
    this.productsService.setModalStatus({product: this.curProduct, show: 'close-delete'});
  }

  clickONPhoto(i: number) {
    this.selectedIndex.indexOf(i) === -1 ? this.selectedIndex.push(i) :
      this.selectedIndex = this.selectedIndex.filter(number => number !== i);
  }

  deleteSelected() {
    const newPhotoUrlsArr: string[] = [];
    this.photosUrls.forEach((photoUrl, index) => {
      if (this.selectedIndex.indexOf(index) === -1) {
        newPhotoUrlsArr.push(photoUrl);
      }
    });
    this.productsService.updatePhotoUrlOnServer(this.curProduct.urlName, newPhotoUrlsArr).subscribe(() => {
      this.photosUrls = newPhotoUrlsArr;
      this.curProduct.photos[0].urlList = newPhotoUrlsArr;
      this.selectedIndex = [];
      // может не надо
      this.productsService.updatePhotos();
    });
  }

  selectAll() {
    this.selectedIndex = [];
    this.photosUrls.forEach((item, index) => this.selectedIndex.push(index));
  }

  ngOnDestroy(): void {
    this.productsSubscr.unsubscribe();
  }

}
