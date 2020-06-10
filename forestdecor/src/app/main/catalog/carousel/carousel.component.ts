import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../../shared';
import { Subscription } from 'rxjs';
import { Show } from '../../../shared/models/showInCatalog';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  showCarousel: string[] | null = null;
  showCarouselSubscription: Subscription;
  product: Product | null = null;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.showCarouselSubscription = this.productsService.showInCatalog.subscribe((data: Show | null) => {
      this.product = data?.product;
      this.showCarousel = data?.product?.photos[0].urlList;
    })
  }

  closeCarousel() {
    this.productsService.setCarouselStatus(null);
  }

  ngOnDestroy(): void {
    this.showCarouselSubscription.unsubscribe();
  }

}
