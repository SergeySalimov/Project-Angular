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
import { RegistrationComponent } from './main/form/registration/registration.component';
import { AuthenticationComponent } from './main/form/authentication/authentication.component';
import { FormToogleButtonsComponent } from './main/form/form-toogle-buttons/form-toogle-buttons.component';
import { SetHeightDirective } from './shared/directives/setHeight/set-height.directive';
import { CatalogNavigationComponent } from './main/catalog/catalog-navigation/catalog-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './shared/material/material-module';
import { DotPipe } from './shared/pipes/dot.pipe';
import {
  CatalogCardDeskComponent,
  CatalogComponent,
  CatalogProductsComponent,
  CatalogSingleProductComponent,
  ContactsComponent,
  DeliveryComponent,
  FormComponent,
  HomeComponent,
  ErrorPageComponent,
  MainComponent,
  MessagesComponent,
  PaymentComponent
} from './main';

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
    ErrorPageComponent,
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
