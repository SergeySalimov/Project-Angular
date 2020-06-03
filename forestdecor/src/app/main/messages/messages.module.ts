import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { AdminGuard } from '../../shared/services/auth/admin.guard';
import { MaterialModule } from '../../material/material-module';
import { MessagesHeadersComponent } from './messages-headers/messages-headers.component';
import { MessagesAccordeonComponent } from './messages-accordeon/messages-accordeon.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'messages', component: MessagesComponent, canActivate: [AdminGuard]}
];

@NgModule({
  declarations: [
    MessagesComponent,
    MessagesHeadersComponent,
    MessagesAccordeonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
  ]
})
export class MessagesModule { }
