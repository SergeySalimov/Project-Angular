import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  @Output() hideNav: EventEmitter<void> = new EventEmitter<void>();

  constructor( private productsService: ProductsService ) {
    this.dataSource.data = productsService.products;
  }

  ngOnInit(): void {}

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
