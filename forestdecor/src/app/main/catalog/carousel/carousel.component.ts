import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product, ProductsService } from '../../../shared';
import { Subscription } from 'rxjs';

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
    this.showCarouselSubscription = this.productsService.showCarousel.subscribe((product: Product | null) => {
      this.product = product;
      this.showCarousel = product?.photos[0].urlList;
    })
  }

  onclick() {
    console.log('btn x ');
  }

  closeCarousel() {
    this.productsService.setCarouselStatus(null);
  }

  ngOnDestroy(): void {
    this.showCarouselSubscription.unsubscribe();
  }

}
