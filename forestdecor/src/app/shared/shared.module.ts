import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DotPipe } from './pipes/dot.pipe';
import { PhoneBYPipe } from './pipes/phone-by.pipe';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ErrorsComponent,
  ],
  exports: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ErrorsComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
