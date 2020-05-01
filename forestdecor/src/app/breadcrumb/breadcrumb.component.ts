import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from '../shared/services/navigation/navigation.service';
import { NavigationLink } from '../shared/models/navigationLink';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { ProductsService } from '../shared/services/products/products.service';
import { ProductPlacer } from '../shared/models/productsPlacer';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumb: NavigationLink[] = [
    { name: 'Главная', routerLink: '/'}
  ];

  navLinks: NavigationLink[];

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.navLinks = this.navigation.navigationLinks;
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).url),
      distinctUntilChanged(),
      map ( strUrl => strUrl.split('/'))
    )
      .subscribe((urlArr: string[]) => {
        this.breadcrumb.splice(1);
        // create second element
        if (urlArr[1]) {
          this.breadcrumb.push(this.navLinks.filter((item) => item.routerLink.split('/')[1] === urlArr[1])[0]);
          // create the rest
          if (urlArr[2]) {
            const curPrd: ProductPlacer = this.productsService.getProductUrlInfo(urlArr[2]);
            if (curPrd.parents.length > 0) {
              curPrd.parents.forEach(url => this.breadcrumb.push(this.doBreadCrumb(url, urlArr[1])));
            }
            this.breadcrumb.push({ name: curPrd.name, routerLink: `${urlArr[1]}/${curPrd.urlName}` });
          }
        }
    })
  }

  doBreadCrumb(url: string, parentUrl: string): NavigationLink {
    const curPrd: ProductPlacer = this.productsService.getProductUrlInfo(url);
    return { name: curPrd.name, routerLink: `${parentUrl}/${curPrd.urlName}` };
  }

}
