import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared/models/product.model';
import { CatalogNavigationService } from '../../catalog-service/catalog-navigation.service';
import { ProductsService } from '../../../../shared/services/products/products.service';
import { ProductPlacer } from '../../../../shared/models/productsPlacer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalog-single-product',
  templateUrl: './catalog-single-product.component.html',
  styleUrls: ['./catalog-single-product.component.scss']
})
export class CatalogSingleProductComponent implements OnInit {

  @Input() curProduct: Product;
  @Input() previous: string;

  constructor(
    public catalogNavigation: CatalogNavigationService,
    private productsService: ProductsService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {}

  goBack(urlName: string, noPrev = false) {
    if (!this.previous || noPrev) {
      // if no previous go to parent
      const prd: ProductPlacer = this.productsService.getProductUrlInfo(urlName);
      this.previous = prd.parents.length > 0 ? prd.parents.pop() : 'all';
    }
    this.router.navigate(['/catalog', this.previous]);
  }

  needPhotos(prodPhoto: string[]) {
    console.log(prodPhoto);
  }

}
