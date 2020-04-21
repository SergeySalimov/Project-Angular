import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./main/home/home.component";
import { CatalogComponent } from "./main/catalog/catalog.component";
import { DeliveryComponent } from "./main/delivery/delivery.component";
import { PaymentComponent } from "./main/payment/payment.component";
import { ContactsComponent } from "./main/contacts/contacts.component";
import { MessagesComponent } from "./main/messages/messages.component";
import { FormComponent } from "./main/form/form.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent},
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
export class AppRoutingModule { }
