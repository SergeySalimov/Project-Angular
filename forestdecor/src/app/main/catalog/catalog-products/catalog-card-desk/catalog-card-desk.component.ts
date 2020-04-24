import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-card-desk',
  templateUrl: './catalog-card-desk.component.html',
  styleUrls: ['./catalog-card-desk.component.scss']
})
export class CatalogCardDeskComponent implements OnInit {

  @Input() curProducts;

  constructor() { }

  ngOnInit(): void {
  }

}
