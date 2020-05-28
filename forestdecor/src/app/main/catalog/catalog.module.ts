import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material-module';
import { ButtonGoTopComponent } from './button-go-top/button-go-top.component';
import { CatalogNavigationComponent } from './catalog-navigation/catalog-navigation.component';
import { CatalogProductsComponent } from './catalog-products/catalog-products.component';
import { CatalogCardDeskComponent } from './catalog-products/catalog-card-desk/catalog-card-desk.component';
import { CatalogSingleProductComponent } from './catalog-products/catalog-single-product/catalog-single-product.component';
import { CatalogRoutingModule } from './catalog-routing.module';

@NgModule({
  declarations: [
    CatalogComponent,
    ButtonGoTopComponent,
    CatalogNavigationComponent,
    CatalogProductsComponent,
    CatalogCardDeskComponent,
    CatalogSingleProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    CatalogRoutingModule,
  ],
  exports: [RouterModule]
})
export class CatalogModule { }
