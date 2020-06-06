import { Component, OnDestroy, OnInit } from '@angular/core';
import { SpinnerService } from '../../services/spinners/spinner.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  isLoading = false;
  spinnerSubscription: Subscription;

  constructor(private spinner: SpinnerService) { }

  ngOnInit(): void {
    this.spinnerSubscription = this.spinner.isLoading.subscribe((isLoading: boolean) => this.isLoading = isLoading);
  }

  ngOnDestroy(): void {
    this.spinnerSubscription.unsubscribe();
  }

}
