import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationLinkComponent
  ],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    SharedModule,
  ]
})
export class NavigationModule { }
