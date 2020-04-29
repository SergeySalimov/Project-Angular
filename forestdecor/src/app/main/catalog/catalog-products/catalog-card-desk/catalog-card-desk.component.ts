import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-card-desk',
  templateUrl: './catalog-card-desk.component.html',
  styleUrls: ['./catalog-card-desk.component.scss']
})
export class CatalogCardDeskComponent implements OnInit {

  @Input() curProducts;
  @Input() showNav = true;

  classForProduct = {
    'col-sm-12': this.showNav,
    'col-md-6': this.showNav,
    'col-lg-4': this.showNav,
    'col-xl-3': this.showNav,
    'col-sm-6': !this.showNav,
    'col-md-4': !this.showNav,
    'col-lg-3': !this.showNav,
    'col-lg-2': !this.showNav,
  };

  constructor() { }

  ngOnInit(): void {
  }

  needPhotos(prodPhoto: string[]) {
    console.log(prodPhoto);
  }

  onCardClick(url: string) {
    console.log(url);
  }

}
