import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DotPipe } from './pipes/dot.pipe';
import { PhoneBYPipe } from './pipes/phone-by.pipe';
import { ConsoleComponent } from './services/console/console.component';
import { ButtonGoTopComponent } from './components/button-go-top/button-go-top.component';
import { INTERCEPTORS } from './interceptors/interceptors';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MaterialModule } from '../material/material-module';

@NgModule({
  declarations: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ConsoleComponent,
    ButtonGoTopComponent,
    ProgressBarComponent
  ],
  exports: [
    SpinnerComponent,
    DotPipe,
    PhoneBYPipe,
    ConsoleComponent,
    ButtonGoTopComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: INTERCEPTORS,
})
export class SharedModule { }
