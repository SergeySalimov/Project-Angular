import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from './shared/services/products/products.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isLoading = false;
  productsServiceSubscription: Subscription;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productsService.getProductsFromServer().subscribe(() => {
        this.productsService.createAllUrls();
        this.isLoading = false;
      },
      () => {
        this.isLoading = false;
      },
    )
  }

  title = 'forestdecor';

  ngOnDestroy(): void {
    this.productsServiceSubscription.unsubscribe();
  }
}
