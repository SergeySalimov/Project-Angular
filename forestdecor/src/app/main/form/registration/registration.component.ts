import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from '../../../shared/models/userData';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy{

  @ViewChild('registrForm', {static: true}) registrForm: NgForm;

  phone = '';
  email: string;
  name: string;
  private routerSubscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.routerSubscription = this._activatedRoute.queryParams
      .subscribe((data: UserData) => {
        [this.name, this.email, this.phone] = [data.name, data.email, data.phone];
      })

  }

  onRegistrSubmit(registrForm) {
    console.log(registrForm.value);
  }

  onChangePhone(event): void {
    this.phone = event;
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }


}
