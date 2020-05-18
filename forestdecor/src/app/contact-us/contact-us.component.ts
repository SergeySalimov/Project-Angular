import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  curRoute: string;

  formContactUs: FormGroup;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this._initform();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects),
      distinctUntilChanged(),
      map(strUrl => strUrl.split('/')[1]),
    )
      .subscribe((route: string) => {
        this.curRoute = route;
      })
  }

  private _initform() {
    this.formContactUs = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', Validators.email),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      isRegisterAfter: new FormControl(false),
    });
  }

  get name() {
    return this.formContactUs.get('name');
  }

  get email() {
    return this.formContactUs.get('email');
  }

  get phone() {
    let phone = this.formContactUs.get('phone');
    if (phone.value === '(') this.formContactUs.patchValue({phone: ''});
    return phone;
  }

  get message() {
    return this.formContactUs.get('message');
  }

  onSubmit() {
    console.log(this.formContactUs);
  }

  onClick() {
    return false;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Введите email или телефон';
    }

    return this.email.hasError('email') ? 'Не правильный email' : '';
  }

}
