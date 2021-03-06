import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductsService, Show } from '../../../shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  showCarouselSubscription: Subscription;
  product: Product | null = null;
  showCarousel: string[] | null = null;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.showCarouselSubscription = this.productsService.showInCatalog.subscribe((data: Show | null) => {
      this.product = data?.product;
      this.showCarousel = data?.product?.photos;
    })
  }

  closeCarousel() {
    this.productsService.setShowInCatalog(null);
  }

  ngOnDestroy(): void {
    this.showCarouselSubscription.unsubscribe();
  }

}
