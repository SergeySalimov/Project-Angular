import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { OldProduct } from '../../models/product.model';
import { Observable } from 'rxjs';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<OldProduct[]> {

  constructor (private productsService: ProductsService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<OldProduct[]> {
    return this.productsService.getProductsFromServer();
  }
}
