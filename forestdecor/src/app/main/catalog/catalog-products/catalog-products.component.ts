import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { ProductsService } from "../../../shared/services/products/products.service";
import { Product } from "../../../shared/models/product.model";

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent implements OnInit {

  curState: string;
  curProducts: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    public productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        // this.curState = paramMap.get('urlName');
        this.curProducts = this.productsService.getAllElements(paramMap.get('urlName'))
        // console.log(this.productsService.getAllElements(this.curState));
        // console.log(this.router.url);
      });
  }



}
