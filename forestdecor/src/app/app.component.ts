import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/services/products/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor (private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getProductsFromServer().subscribe(() => {
        this.productsService.createAllUrls();
      }
    )
  }

  title = 'forestdecor';
}
