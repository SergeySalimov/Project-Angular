import { Component } from '@angular/core';
import { CatalogNavigationService } from './catalog-service/catalog-navigation.service';
import { MODALS_NAME, ProductsService } from '../../shared';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  showCarousel = MODALS_NAME.SHOW_CAROUSEL;
  editPhotos = MODALS_NAME.SHOW_EDIT_PHOTOS;
  showInCatalog$ = this.productsService.showInCatalog;
  constructor(public catalogNavigation: CatalogNavigationService, private productsService: ProductsService) {
  }
}
