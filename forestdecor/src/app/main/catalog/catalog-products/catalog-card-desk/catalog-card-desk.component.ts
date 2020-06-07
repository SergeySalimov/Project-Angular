import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../../shared';
import { CatalogNavigationService } from '../../catalog-service/catalog-navigation.service';

@Component({
  selector: 'app-catalog-card-desk',
  templateUrl: './catalog-card-desk.component.html',
  styleUrls: ['./catalog-card-desk.component.scss']
})
export class CatalogCardDeskComponent implements OnInit {

  @Input() curProductData : Product[];

  constructor(public catalogNavigation: CatalogNavigationService) { }

  ngOnInit(): void {
  }

}
