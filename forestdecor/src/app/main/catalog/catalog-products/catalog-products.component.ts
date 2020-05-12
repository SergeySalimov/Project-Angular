import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../../shared/services/products/products.service';
import { ProductPlacer } from '../../../shared/models/productsPlacer';

@Component({
  selector: 'app-catalog-products',
  templateUrl: './catalog-products.component.html',
  styleUrls: ['./catalog-products.component.scss']
})
export class CatalogProductsComponent implements OnInit {

  curProducts: ProductPlacer;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
    ) { }


  ngOnInit(): void {
    this.activatedRoute.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.curProducts = this.productsService.getProductUrlInfo(paramMap.get('urlName'));
      });
  }

}
