import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  CatalogComponent,
  CatalogProductsComponent,
  ContactsComponent,
  DeliveryComponent,
  FormComponent,
  HomeComponent,
  MessagesComponent,
  PaymentComponent
} from './main';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'catalog',
    component: CatalogComponent,
    children: [
      {
        path: ':urlName',
        component: CatalogProductsComponent,
      },
    ]

  },
  {path: 'delivery', component: DeliveryComponent},
  {path: 'payment', component: PaymentComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'form', component: FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
