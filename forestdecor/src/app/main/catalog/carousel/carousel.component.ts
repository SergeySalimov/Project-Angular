import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService, Product } from '../../../shared';
import { PhotoUrl } from '../../../shared/models/photo-url.model';
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

  constructor(private photo: PhotoService) {
  }

  ngOnInit(): void {
    this.showCarouselSubscription = this.photo.showCarousel.subscribe((product: Product | null) => {
      this.product = product;
      this.showCarousel = product?.photos[0].urlList;
      console.log(this.showCarousel);
    })
  }

  onclick() {
    console.log('btn x ');
  }

  closeCarousel() {
    this.photo.setCarouselStatus(null);
  }

  ngOnDestroy(): void {
    this.showCarouselSubscription.unsubscribe();
  }

}
