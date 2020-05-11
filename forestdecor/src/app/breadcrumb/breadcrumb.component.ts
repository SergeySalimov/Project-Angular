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

  breadcrumbTree: NavigationLink[];

  navLinks: NavigationLink[];

  constructor(
    private router: Router,
    private navigation: NavigationService,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.navLinks = this.navigation.allLinks;
    this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).urlAfterRedirects),
      map ( strUrl => strUrl.split('/')),
      distinctUntilChanged(),
    )
      .subscribe((urlArr: string[]) => {
        // first element
        this.breadcrumbTree = this.navigation.mainPage;
        // create second element
        if (urlArr[1]) {
          this.breadcrumbTree.push(this.navLinks.filter(item => item.routerLink.split('/')[1] === urlArr[1])[0]);
          // create the rest
          if (urlArr[2]) {
            const curPrd: ProductPlacer = this.productsService.getProductUrlInfo(urlArr[2]);
            if (curPrd) {
              if (curPrd.parents.length > 0) {
                curPrd.parents.forEach(url => this.breadcrumbTree.push(this.doBreadCrumb(url, urlArr[1])));
              }
              this.breadcrumbTree.push({name: curPrd.name, routerLink: `${urlArr[1]}/${curPrd.urlName}`});
            } else {
              this.breadcrumbTree.push({name: 'Такой продукт не найден', routerLink: `404`});
            }
          }
        }
    })
  }

  doBreadCrumb(url: string, parentUrl: string): NavigationLink {
    const curPrd: ProductPlacer = this.productsService.getProductUrlInfo(url);
    return { name: curPrd.name, routerLink: `${parentUrl}/${curPrd.urlName}` };
  }

}
