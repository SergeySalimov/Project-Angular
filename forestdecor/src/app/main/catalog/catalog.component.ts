import { Component } from '@angular/core';
import { CatalogNavigationService } from './catalog-service/catalog-navigation.service';
import { ProductsService } from '../../shared';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  // ToDO need to review
  showInCatalog$ = this.productsService.showInCatalog;
  constructor(public catalogNavigation: CatalogNavigationService, private productsService: ProductsService) {
  }
}
