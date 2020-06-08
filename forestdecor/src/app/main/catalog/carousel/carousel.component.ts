import { Component, OnDestroy, OnInit } from '@angular/core';
import { PhotoService } from '../../../shared';
import { PhotoUrl } from '../../../shared/models/photo-url.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {

  showCarousel: string[] | number = null;
  showCarouselSubscription: Subscription;

  constructor(private photo: PhotoService) {
  }

  ngOnInit(): void {
    this.showCarouselSubscription = this.photo.showCarousel.subscribe((photos: PhotoUrl[] | null) => {
      this.showCarousel = photos[0].urlList;
    })
  }

  ngOnDestroy(): void {
    this.showCarouselSubscription.unsubscribe();
  }

}
