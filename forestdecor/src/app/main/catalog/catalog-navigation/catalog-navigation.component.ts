import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { ProductsService } from "../../../shared/services/products/products.service";
import { Product } from "../../../shared/models/product.model";

/** Flat node with expandable and level information */
interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-catalog-navigation',
  templateUrl: './catalog-navigation.component.html',
  styleUrls: ['./catalog-navigation.component.scss']
})

export class CatalogNavigationComponent implements OnInit {

  // products: Product[] = [
  //   {name: '1111', urlName: 'all1'},
  //   {name: '2222', urlName: 'all2'},
  //   {name: '3333', urlName: 'all3'},
  // ];

  constructor(
    public productsService: ProductsService
  ) {
    this.dataSource.data = productsService.products;
  }

  ngOnInit(): void {
    // this.products =  this.productsService.products;
    // this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    //   console.log(paramMap.get('urlName'));
    // });

    // console.log(this.products);

  }

  onClick(el: string) {
    // console.log(el);
  }

  private _transformer = (node: Product, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      urlName: node.urlName,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
