import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import { AdminGuard } from '../../shared/services/auth/admin.guard';

const routes: Routes = [
  {path: 'messages', component: MessagesComponent, canActivate: [AdminGuard]}
];

@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class MessagesModule { }
