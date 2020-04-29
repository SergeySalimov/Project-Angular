import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { NavigationElementComponent } from './navigation/navigation-element/navigation-element.component';
import { NavigationLinkComponent } from './navigation/navigation-link/navigation-link.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { CatalogComponent } from './main/catalog/catalog.component';
import { MessagesComponent } from './main/messages/messages.component';
import { DeliveryComponent } from './main/delivery/delivery.component';
import { PaymentComponent } from './main/payment/payment.component';
import { ContactsComponent } from './main/contacts/contacts.component';
import { FormComponent } from './main/form/form.component';
import { RegistrationComponent } from './main/form/registration/registration.component';
import { AuthenticationComponent } from './main/form/authentication/authentication.component';
import { FormToogleButtonsComponent } from './main/form/form-toogle-buttons/form-toogle-buttons.component';
import { SetHeightDirective } from './shared/directives/setHeight/set-height.directive';
import { CatalogNavigationComponent } from './main/catalog/catalog-navigation/catalog-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from "./shared/material/material-module";
import { CatalogProductsComponent } from './main/catalog/catalog-products/catalog-products.component';
import { CatalogSingleProductComponent } from './main/catalog/catalog-products/catalog-single-product/catalog-single-product.component';
import { CatalogCardDeskComponent } from './main/catalog/catalog-products/catalog-card-desk/catalog-card-desk.component';
import { DotPipe } from './shared/pipes/dot.pipe';
import { SetBtnPosDirective } from './shared/directives/setButtonPosition/set-btn-pos.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    NavigationElementComponent,
    NavigationLinkComponent,
    BreadcrumbComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    CatalogComponent,
    MessagesComponent,
    DeliveryComponent,
    PaymentComponent,
    ContactsComponent,
    FormComponent,
    RegistrationComponent,
    AuthenticationComponent,
    FormToogleButtonsComponent,
    SetHeightDirective,
    CatalogNavigationComponent,
    CatalogProductsComponent,
    CatalogSingleProductComponent,
    CatalogCardDeskComponent,
    DotPipe,
    SetBtnPosDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
