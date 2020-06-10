import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { NavigationLink, NavigationService, ProductPlacer, ProductsService } from '../shared';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  breadcrumbTree: NavigationLink[];
  navLinks: NavigationLink[];

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private productsService: ProductsService
  ) {  }

  ngOnInit(): void {
    this.navLinks = this.navigation.allLinks;
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).urlAfterRedirects),
      map ( strUrl => strUrl.split('?')[0]),
      map ( strUrl => strUrl.split('#')[0]),
      map ( strUrl => strUrl.split('/')),
      distinctUntilChanged(),
      tap(() => this.productsService.setModalStatus(null)),
    )
      .subscribe((urlArr: string[]) => {
        // first element
        this.breadcrumbTree = this.navigation.mainPage;
        // create second element
        if (urlArr[1]) {
          this.breadcrumbTree.push(this.navLinks.filter(item => item.routerLink.split('/')[1] === urlArr[1])[0]);
          // create the rest forms or catalog of products
          if (urlArr[2]) {
            (urlArr[1] === 'form') ? this.doBreadcrumbForForm(urlArr) : this.doBreadcrumbForProducts(urlArr);
          }
        }
    })
  }

  doBreadcrumbForProducts(urlArr: string[]): void {
    const curPrd: ProductPlacer = this.productsService.getProductUrlInfo(urlArr[2]);
    if (!!curPrd) {
      if (curPrd.parents.length > 0) {
        curPrd.parents.forEach(url => this.breadcrumbTree.push(this.doBreadCrumb(url, urlArr[1])));
      }
      this.breadcrumbTree.push({name: curPrd.name, routerLink: `${urlArr[1]}/${curPrd.urlName}`});
    } else {
      this.breadcrumbTree.push({name: 'Такой продукт не найден', routerLink: `/404`});
    }
  }

  doBreadcrumbForForm(urlArr: string[]): void {
    const elem: NavigationLink = this.navigation.logLinks.filter(item => item.routerLink.split('/')[2] === urlArr[2])[0];
    this.breadcrumbTree.push(elem);
    // recovery state added if exists in router
    if (!!urlArr[3]) this.breadcrumbTree.push(this.navigation.recovery);
  }

  doBreadCrumb(url: string, parentUrl: string): NavigationLink {
    const curPrd: ProductPlacer = this.productsService.getProductUrlInfo(url);
    return { name: curPrd.name, routerLink: `${parentUrl}/${curPrd.urlName}` };
  }

}
