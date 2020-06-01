import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductPlacer } from '../../models/productsPlacer';
import { environment } from '../../../../environments/environment';
import { exhaustMap, mergeMap, take, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products: Product[];
  private accumulator: Product[];
  private productsPlacer: ProductPlacer[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {
    this.getProductsFromServer().pipe(
      take(1),
      exhaustMap(() => this.auth.getAdminsFromServer()),
      ).subscribe(() => {});
  }

  get products() {
    return [...this._products];
  }

  getProductsFromServer(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.firebase.databaseURL}/products.json`).pipe(
      tap((prd: Product[]) => this._products = [...prd]),
      tap(() => this.createAllUrls()),
    );
  }

  getProductUrlInfo(url): ProductPlacer {
    return this.productsPlacer.filter(item => item.urlName === url)[0];
  }

  createAllUrls() {
    this.createPlacingProduct('all', 'весь каталог');
    this.createUrlsInformation();
  }

  createUrlsInformation(data: Product[] = this._products, parents: string[] = []): void {
    for (const item of data) {
      if (item.children) {
        this.createPlacingProduct(item.urlName, item.name, [...parents]);
        parents.push(item.urlName);
        this.createUrlsInformation(item.children, [...parents]);
        parents.pop();
      } else {
        this.createPlacingProduct(item.urlName, item.name, [...parents]);
      }
    }
  }

  createPlacingProduct(urlName: string, name: string, parents: string[] = []): void {
    const content: Product[] = this.getAllElements(urlName);
    // this.prdTemp = {name, urlName, content, parents};
    this.productsPlacer.push({urlName, name, content, parents});
  }

  getAllElements(forUrl: string): Product[] {
    return this.initProducts(this._products, forUrl);
  }

  initProducts(data: Product[], url = 'all'): Product[] {
    this.accumulator = [];
    url === 'all' ? this.parsingProducts(data) : this.findUrlContent(data, url);
    return this.accumulator;
  }

  findUrlContent(data: Product[], url: string): void {
    for (const item of data) {
      if (item.children) {
        if (item.urlName === url) {
          this.initProducts(item.children);
          break;
        }
        this.findUrlContent(item.children, url);
      } else {
        if (item.urlName === url) {
          this.accumulator.push(item);
          break;
        }
      }
    }
  }

  parsingProducts(data: Product[]): void {
    for (const item of data) {
      item.children ? this.parsingProducts(item.children) : this.accumulator.push(item);
    }
  }
}
