import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';
import { ProductPlacer, ProductsService } from '../../../shared';
import { Show } from '../../../shared/models/showInCatalog';
import { UrlOfCatalog } from '../../../shared/models/url-of-catalog';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent implements OnInit, OnDestroy {

  curProducts: UrlOfCatalog;
  routerSubscription: Subscription;
  activatedRouteSubscription: Subscription;
  previous: string = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRouteSubscription = this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.curProducts = this.productsService.getProductUrlInfo(paramMap.get('urlName'));
      });
    this.routerSubscription = this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).url),
      map ( strUrl => strUrl.split('/')),
      map(strArr => strArr[2]),
      pairwise(),
    ).subscribe(([prev, cur]) => {
      this.previous = prev;
    });

    // this.productsService.showInCatalog.subscribe((data: Show) => {
    //   if (data?.show === 'close-delete') {
    //     if (!!data.product.photos && data.product.photos[0].urlList?.length > 0) {
    //       this.curProducts.content[0].photos = data.product.photos;
    //     } else {
    //       delete this.curProducts.content[0].photos;
    //     }
    //     this.productsService.setModalStatus(null);
    //   }
    // })
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
    this.activatedRouteSubscription.unsubscribe();
  }

}
