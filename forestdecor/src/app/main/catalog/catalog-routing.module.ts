import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductsResolver } from '../../shared/services/products/products.resolver';
import { CatalogProductsComponent } from './catalog-products/catalog-products.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
    resolve: {products: ProductsResolver},
    children: [
      { path: ':urlName', component: CatalogProductsComponent, },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
