import { Component, OnInit } from '@angular/core';
import { CatalogNavigationService } from './catalog-service/catalog-navigation.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

 constructor(public catalogNavigation: CatalogNavigationService) { }

  ngOnInit(): void {
  }

}
