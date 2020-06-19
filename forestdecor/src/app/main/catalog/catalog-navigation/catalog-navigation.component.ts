import { Component, OnInit } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { OldProduct, ProductsService } from '../../../shared';
import { CatalogNavigationService } from '../catalog-service/catalog-navigation.service';

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

  private _transformer = (node: OldProduct, level: number) => {
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

  constructor( private productsService: ProductsService,
               public catalogNavigation: CatalogNavigationService) {
    this.dataSource.data = productsService.treeData;
  }

  ngOnInit(): void {
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

}
