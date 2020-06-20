import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductsService, Show } from '../../../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-photos',
  templateUrl: './edit-photos.component.html',
  styleUrls: ['./edit-photos.component.scss']
})
export class EditPhotosComponent implements OnInit, OnDestroy {

  curProduct: Product | null = null;
  selectedIndex: number[] = [];
  productsSubscr: Subscription;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsSubscr = this.productsService.showInCatalog.subscribe( (data: Show) => this.curProduct = data?.product);
  }

  onAddPhoto(event) {
    if (!!event.target.files[0]) {
      this.productsService.uploadFile(event.target.files[0], this.curProduct);
    }
  }

  closeWindow() {
    this.productsService.setShowInCatalog(null);
  }

  clickONPhoto(i: number) {
    this.selectedIndex.indexOf(i) === -1 ? this.selectedIndex.push(i) :
      this.selectedIndex = this.selectedIndex.filter(number => number !== i);
  }

  deleteSelected() {
    const newPhotoUrlsArr: string[] = [];
    const delPhotoUrlsArr: string[] = [];
    this.curProduct.photos?.forEach((photoUrl, index) => {
      if (this.selectedIndex.indexOf(index) === -1) {
        newPhotoUrlsArr.push(photoUrl);
      } else {
        delPhotoUrlsArr.push(photoUrl);
      }
    });
    this.curProduct.photos = [...newPhotoUrlsArr];
    this.productsService.updateProductOnServer(this.curProduct).subscribe(data => {
      if (delPhotoUrlsArr?.length > 0) {
        this.productsService.deletePhotosInStorage(delPhotoUrlsArr);
        this.selectedIndex = [];
      }
    });
  }

  selectAll() {
    this.selectedIndex = [];
    this.curProduct.photos?.forEach((item, index) => this.selectedIndex.push(index));
  }

  ngOnDestroy(): void {
    this.curProduct = null;
    this.selectedIndex = [];
    this.productsSubscr.unsubscribe();
  }

}
