import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormToogleButtonsComponent } from './form-toogle-buttons/form-toogle-buttons.component';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FormRoutingModule } from './form-routing.module';

@NgModule({
  declarations: [
    FormComponent,
    AuthenticationComponent,
    FormToogleButtonsComponent,
    RegistrationComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    FormRoutingModule,
    SharedModule,
  ]
})
export class LoginModule { }
