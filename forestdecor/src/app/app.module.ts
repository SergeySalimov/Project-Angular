import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material-module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorsInterceptor } from './shared/interceptors/errors.interceptor';
import { LoaderInterceptor } from './shared/interceptors/loader.interceptor';
import { AddTokenInterceptor } from './shared/interceptors/add-token.interceptor';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';
import { SharedModule } from './shared/shared.module';
import { BreadcrumbModule } from './breadcrumb/breadcrumb.module';
import { ContactUsModule } from './contact-us/contact-us.module';
import { NavigationModule } from './navigation/navigation.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { LoginModule } from './main/form/login.module';
import { MessagesModule } from './main/messages/messages.module';
import { ContactsComponent, DeliveryComponent, ErrorPageComponent, HomeComponent, PaymentComponent } from './main';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorPageComponent,
    PaymentComponent,
    DeliveryComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    BreadcrumbModule,
    ContactUsModule,
    NavigationModule,
    HeaderModule,
    FooterModule,
    LoginModule,
    MessagesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: BUCKET, useValue: 'gs://prj-forestdecor.appspot.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
