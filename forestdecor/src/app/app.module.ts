import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { NavigationLinkComponent } from './navigation/navigation-link/navigation-link.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { FooterComponent } from './footer/footer.component';
import { FormToogleButtonsComponent } from './main/form/form-toogle-buttons/form-toogle-buttons.component';
import { SetHeightDirective } from './shared/directives/set-height/set-height.directive';
import { CatalogNavigationComponent } from './main/catalog/catalog-navigation/catalog-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material-module';
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
  PaymentComponent, RegistrationComponent, AuthenticationComponent
} from './main';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BtnCloseComponent } from './shared/components/btn-close/btn-close.component';
import { PhoneBYPipe } from './shared/pipes/phone-by.pipe';
import { ButtonGoTopComponent } from './shared/components/button-go-top/button-go-top.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ErrorsComponent } from './shared/services/errors/errors.component';
import { ErrorsInterceptor } from './shared/interceptors/errors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
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
    ContactUsComponent,
    BtnCloseComponent,
    BtnCloseComponent,
    PhoneBYPipe,
    ButtonGoTopComponent,
    SpinnerComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
