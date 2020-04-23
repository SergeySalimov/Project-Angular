import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, UrlSegment } from "@angular/router";

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        console.log(paramMap.get('urlName'));

        console.log(this.router.url);
      });

  }
}
