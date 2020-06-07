import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DotPipe } from './pipes/dot.pipe';
import { PhoneBYPipe } from './pipes/phone-by.pipe';
import { ConsoleComponent } from './services/console/console.component';
import { ButtonGoTopComponent } from './components/button-go-top/button-go-top.component';
import { INTERCEPTORS } from './interceptors/interceptors';

@NgModule({
  declarations: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ConsoleComponent,
    ButtonGoTopComponent
  ],
  exports: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ConsoleComponent,
    ButtonGoTopComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: INTERCEPTORS,
})
export class SharedModule { }
