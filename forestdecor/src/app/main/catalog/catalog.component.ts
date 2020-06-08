import { Component, OnInit } from '@angular/core';
import { CatalogNavigationService } from './catalog-service/catalog-navigation.service';
import { PhotoService } from '../../shared';
import { PhotoUrl } from '../../shared/models/photo-url.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  showCarousel$ = this.photo.showCarousel;


 constructor(public catalogNavigation: CatalogNavigationService, private photo: PhotoService) {

 }

  ngOnInit(): void {

  }

}
