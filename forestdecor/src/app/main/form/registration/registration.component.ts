import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserData } from '../../../shared/models/userData';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { AuthResponse } from '../../../shared/services/auth/auth-response';
import { SpinnerService } from '../../../shared/components/spinner/spinner.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit, OnDestroy {

  @ViewChild('registrForm', {static: true}) registrForm: NgForm;

  phone = '';
  email: string;
  name: string;
  private routerSubscription: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private spinner: SpinnerService
  ) {
  }

  ngOnInit(): void {
    this.routerSubscription = this.activatedRoute.queryParams
      .subscribe((data: UserData) => {
        [this.name, this.email, this.phone] = [data.name, data.email, data.phone];
      })

  }

  onRegistrSubmit(form: NgForm) {
    const userData: UserData = {
      email: form.value.registEmail,
      name: form.value.registName,
      phone: form.value.registrPhone,
    };
    this.auth.registration(userData, form.value.regPsw.regPsw1).subscribe((response: AuthResponse) => {
        console.log(response);
        this.router.navigate(['']);
        this.registrForm.resetForm();
      });
  }

  onChangePhone(event): void {
    this.phone = event;
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }


}
