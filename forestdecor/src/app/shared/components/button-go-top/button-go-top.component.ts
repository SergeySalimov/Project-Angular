import { Component, OnInit } from '@angular/core';
import { CatalogNavigationService } from '../../services/catalogNavigation/catalog-navigation.service';

@Component({
  selector: 'app-button-go-top',
  templateUrl: './button-go-top.component.html',
  styleUrls: ['./button-go-top.component.scss']
})
export class ButtonGoTopComponent implements OnInit {

  constructor(public catalogNavigation: CatalogNavigationService) { }

  ngOnInit(): void {
  }

}
