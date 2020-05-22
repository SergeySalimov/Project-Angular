import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { ProductsService } from '../../../shared/services/products/products.service';
import { ProductPlacer } from '../../../shared/models/productsPlacer';
import { Subscription } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent implements OnInit, OnDestroy {

  curProducts: ProductPlacer;
  subscription: Subscription;
  previous: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
  ) {}


  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.curProducts = this.productsService.getProductUrlInfo(paramMap.get('urlName'));
      });
    this.subscription = this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).url),
      map ( strUrl => strUrl.split('/')),
      map(strArr => strArr[2]),
      pairwise(),
    ).subscribe(([prev, cur]) => {
      this.previous = prev;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
