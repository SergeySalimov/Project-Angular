import { Component, Input } from '@angular/core';
import { CatalogNavigationService } from '../../catalog-service/catalog-navigation.service';
import { Router } from '@angular/router';
import { AuthService, Product, ProductsService, UrlOfCatalog, User } from '../../../../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-single-product',
  templateUrl: './catalog-single-product.component.html',
  styleUrls: ['./catalog-single-product.component.scss']
})
export class CatalogSingleProductComponent {

  @Input() curProduct: Product;
  @Input() previous: string;
  user$: Observable<User> = this.auth.user;

  constructor(
    public catalogNavigation: CatalogNavigationService,
    private productsService: ProductsService,
    private router: Router,
    private auth: AuthService) { }

  onDeletePhoto(product: Product) {
    this.productsService.setModalStatus({product, show: 'delete-photos'});
  }

  goBack(urlName: string, noPrev = false) {
    if (!this.previous || noPrev) {
      // if no previous go to parent
      const prd: UrlOfCatalog = this.productsService.getProductUrlInfo(urlName);
      this.previous = prd.parents.length > 0 ? prd.parents.pop() : 'all';
    }
    this.router.navigate(['/catalog', this.previous]);
  }

}
