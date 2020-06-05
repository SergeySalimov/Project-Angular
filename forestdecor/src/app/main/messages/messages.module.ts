import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { AdminGuard } from '../../shared/services/auth/admin.guard';
import { MaterialModule } from '../../material/material-module';
import { MessagesAccordeonComponent } from './messages-accordeon/messages-accordeon.component';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import localeRu from '@angular/common/locales/ru';
import { MsgsResolver } from '../../shared/services/messages/msgs.resolver';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localeRu, 'ru');

const routes: Routes = [
  {path: '', component: MessagesComponent, resolve: {messages: MsgsResolver}, canActivate: [AdminGuard]}
];

@NgModule({
  declarations: [
    MessagesComponent,
    MessagesAccordeonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
  ],
  exports: [
    RouterModule,
  ]
})
export class MessagesModule { }
