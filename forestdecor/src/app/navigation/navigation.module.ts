import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation.component';
import { NavigationLinkComponent } from './navigation-link/navigation-link.component';

@NgModule({
  declarations: [
    NavigationComponent,
    NavigationLinkComponent
  ],
  exports: [NavigationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
  ]
})
export class NavigationModule { }
