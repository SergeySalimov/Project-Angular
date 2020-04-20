import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FlatTreeControl } from "@angular/cdk/tree";
import { MatTreeFlatDataSource, MatTreeFlattener } from "@angular/material/tree";
import { ProductsService } from "../../../shared/services/products.service";
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

export class CatalogNavigationComponent implements OnInit, OnChanges {

  private prevLink: {
    expandable?: boolean,
    name: string,
    level?: number,
    active?: boolean,
  };


  constructor(public productsService: ProductsService) {
    this.dataSource.data = productsService.products;
    console.log(this.dataSource.data);
  }

  ngOnInit(): void {
    // works only for all
    this.prevLink = { name: 'all' };
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  onClickAll() {
    if (this.prevLink.name !== 'all') {
      this.prevLink.active = false;
      this.prevLink = {name: 'all'};
    }
  }

  onClick(el: any, name: string) {
    console.dir(el);
    if (!el.active) {
      if (this.prevLink.name !== 'all') this.prevLink.active = false;
      el.active = true;
      this.prevLink = el;
      this.productsService.setActive(name);
      console.log(this.productsService.products);
      // this.productsService.setActive(name);
    }
  }

  private _transformer = (node: Product, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      active: node.active,
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
