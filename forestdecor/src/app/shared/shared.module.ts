import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DotPipe } from './pipes/dot.pipe';
import { PhoneBYPipe } from './pipes/phone-by.pipe';
import { ConsoleComponent } from './services/console/console.component';
import { INTERCEPTORS } from './interceptors/interceptors';

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
  ],
  providers: INTERCEPTORS,
})
export class SharedModule { }
