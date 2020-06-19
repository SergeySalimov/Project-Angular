import { Component } from '@angular/core';
import { CatalogNavigationService } from './catalog-service/catalog-navigation.service';
import { ProductsService } from '../../shared';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  showCarousel = environment.SHOW_CAROUSEL;
  editPhotos = environment.SHOW_EDIT_PHOTOS;
  showInCatalog$ = this.productsService.showInCatalog;
  constructor(public catalogNavigation: CatalogNavigationService, private productsService: ProductsService) {
  }
}
