import { Component, Input, OnInit } from '@angular/core';
import { CatalogNavigationService } from '../../catalog-service/catalog-navigation.service';
import { Router } from '@angular/router';
import { AuthService, PhotoService, Product, ProductPlacer, ProductsService, User } from '../../../../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-single-product',
  templateUrl: './catalog-single-product.component.html',
  styleUrls: ['./catalog-single-product.component.scss']
})
export class CatalogSingleProductComponent implements OnInit {

  @Input() curProduct: Product;
  @Input() previous: string;
  user$: Observable<User> = this.auth.user;

  constructor(
    public catalogNavigation: CatalogNavigationService,
    private productsService: ProductsService,
    private router: Router,
    private photo: PhotoService,
    private auth: AuthService,
  ) {
  }

  ngOnInit(): void {}

  onDeletePhoto(product: Product) {
    console.log(product);
  }

  // onAddPhoto(event, product: Product) {
  //   console.log(product);
  //   if (!!event.target.files[0]) {
  //     this.photo.uploadFile(event.target.files[0], product.urlName);
  //   }
  // }

  goBack(urlName: string, noPrev = false) {
    if (!this.previous || noPrev) {
      // if no previous go to parent
      const prd: ProductPlacer = this.productsService.getProductUrlInfo(urlName);
      this.previous = prd.parents.length > 0 ? prd.parents.pop() : 'all';
    }
    this.router.navigate(['/catalog', this.previous]);
  }

}
