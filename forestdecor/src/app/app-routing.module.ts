import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  AuthenticationComponent,
  CatalogComponent,
  CatalogProductsComponent,
  ContactsComponent,
  DeliveryComponent,
  ErrorPageComponent,
  FormComponent,
  HomeComponent,
  MessagesComponent,
  PaymentComponent,
  RegistrationComponent
} from './main';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', redirectTo: '/catalog/all', pathMatch: 'full'},
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      { path: ':urlName', component: CatalogProductsComponent, },
    ]
  },
  {path: 'delivery', component: DeliveryComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'form', redirectTo: 'form/authorization', pathMatch: 'full'},
  {
    path: 'form',
    component: FormComponent,
    children: [
      {path: 'registration', component: RegistrationComponent},
      {
        path: 'authorization',
        component: AuthenticationComponent,
        children: [
          {path: 'recovery', component: AuthenticationComponent},
        ]},
    ]},
  {path: 'registration', component: FormComponent},
  {path: 'authorization', component: FormComponent},
  {path: 'recovery', component: FormComponent},
  {path: '404', component: ErrorPageComponent},
  {path: '**', redirectTo: '404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
