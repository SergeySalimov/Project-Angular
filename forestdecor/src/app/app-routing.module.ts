import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContactsComponent, DeliveryComponent, ErrorPageComponent, HomeComponent, PaymentComponent } from './main';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'delivery', component: DeliveryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'payment', component: PaymentComponent},
  {path: '404', component: ErrorPageComponent},
  {path: 'catalog', redirectTo: 'catalog/all', pathMatch: 'full'},
  {path: 'catalog', loadChildren: () => import('./main/catalog/catalog.module').then(m => m.CatalogModule)},
  {path: 'form', redirectTo: 'form/authorization', pathMatch: 'full'},
  {path: 'form/authorization', redirectTo: 'form/authorization', pathMatch: 'full'},
  {path: 'form/authorization/recovery', redirectTo: 'form/authorization/recovery', pathMatch: 'full'},
  {path: 'form/registration', redirectTo: 'form/registration', pathMatch: 'full'},
  {path: 'messages', redirectTo: 'messages', pathMatch: 'full'},
  {path: 'messages', loadChildren: () => import('./main/messages/messages.module').then(m => m.MessagesModule)},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//npm i ngx-quicklink --save
