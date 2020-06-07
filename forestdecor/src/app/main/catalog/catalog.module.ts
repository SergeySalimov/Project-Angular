import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { SharedModule } from '../../shared/shared.module';
import { MaterialModule } from '../../material/material-module';
import { CatalogNavigationComponent } from './catalog-navigation/catalog-navigation.component';
import { CatalogProductsComponent } from './catalog-products/catalog-products.component';
import { CatalogCardDeskComponent } from './catalog-products/catalog-card-desk/catalog-card-desk.component';
import { CatalogSingleProductComponent } from './catalog-products/catalog-single-product/catalog-single-product.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { ButtonAddComponent, ButtonDeleteComponent, ButtonShowComponent } from './catalog-products/buttons';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogNavigationComponent,
    CatalogProductsComponent,
    CatalogCardDeskComponent,
    CatalogSingleProductComponent,
    ButtonShowComponent,
    ButtonAddComponent,
    ButtonDeleteComponent
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
