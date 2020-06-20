import { Component, Input } from '@angular/core';
import { AuthService, MODALS_NAME, Product, ProductsService, User } from '../../../../shared';
import { CatalogNavigationService } from '../../catalog-service/catalog-navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-card-desk',
  templateUrl: './catalog-card-desk.component.html',
  styleUrls: ['./catalog-card-desk.component.scss']
})
export class CatalogCardDeskComponent {
  @Input() curProductData : Product[];
  user$: Observable<User> = this.auth.user;
  constructor(public catalogNavigation: CatalogNavigationService,
              private auth: AuthService,
              private productsService: ProductsService) { }

  onEditPhoto(product: Product) {
    this.productsService.setShowInCatalog({product, show: MODALS_NAME.SHOW_EDIT_PHOTOS});
  }
}
