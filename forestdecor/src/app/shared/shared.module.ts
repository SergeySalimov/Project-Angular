import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DotPipe } from './pipes/dot.pipe';
import { PhoneBYPipe } from './pipes/phone-by.pipe';
import { ConsoleComponent } from './services/console/console.component';

@NgModule({
  declarations: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ConsoleComponent,
  ],
  exports: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ConsoleComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
