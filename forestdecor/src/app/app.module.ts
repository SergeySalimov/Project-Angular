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
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }