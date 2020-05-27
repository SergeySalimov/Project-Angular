import { Component, OnInit } from '@angular/core';
import { ErrorsService } from './errors.service';
import { CustomError } from './customError';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {

  error: CustomError = null;

  constructor( private errorsService: ErrorsService) { }

  ngOnInit(): void {
    this.errorsService.error.subscribe((error: CustomError) => {
        this.error = error;
      }
    );
  }

  hide() {
    this.errorsService.hideError();
  }

}
