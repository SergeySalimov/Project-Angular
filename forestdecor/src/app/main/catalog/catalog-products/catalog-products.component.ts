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

  curProducts: Product[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.curProducts = this.productsService.getAllElements(paramMap.get('urlName'));
        console.log(this.curProducts);
        // console.log(this.router.url);
      });
  }



}
