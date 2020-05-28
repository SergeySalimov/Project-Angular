import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { BtnCloseComponent } from './btn-close/btn-close.component';

@NgModule({
  declarations: [
    ContactUsComponent,
    BtnCloseComponent
  ],
  exports: [
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class ContactUsModule { }
