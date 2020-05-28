import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule {}
