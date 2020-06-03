import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ContactUsService } from './contact-us-service/contact-us.service';
import { UserData } from '../shared/models/userData';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/services/auth/user';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {

  curRoute: string;
  formContactUs: FormGroup;
  isRegisterAfter: boolean;
  isUserNotLog = true;
  isUserAdmin = false;
  phoneSubscr: Subscription;
  routerSubscription: Subscription;
  auhtSubscr: Subscription;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private router: Router, private contactUs: ContactUsService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this._initform();

    this.phoneSubscr = this.formContactUs.controls['phone'].valueChanges.pipe(map(ph => ph === '(' ? '' : ph))
      .subscribe(phone => {
          phone === '' ? this.emailState.setValidators([Validators.required, Validators.email]) :
            this.emailState.setValidators([Validators.email]);
          this.emailState.updateValueAndValidity();
        });

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects),
      distinctUntilChanged(),
      map(strUrl => strUrl.split('/')[1]))
      .subscribe((route: string) => this.curRoute = route);

    this.auhtSubscr = this.auth.user.pipe(
      tap(user => !!user ? [this.isUserNotLog, this.isUserAdmin]=[false, user.isAdmin] :
        [this.isUserNotLog, this.isUserAdmin]=[true, false]))
      .subscribe((user: User) => ((!!user && !this.isUserAdmin) || !user) ? this.patchUserData(user) : null);
  }

  get name() {
    return this.formContactUs.get('name').value || '';
  }

  get nameState() {
    return this.formContactUs.get('name');
  }

  get email() {
    return this.formContactUs.get('email').value || '';
  }

  get emailState() {
    return this.formContactUs.get('email');
  }

  get phone() {
    return this.formContactUs.get('phone').value || '';
  }

  get message() {
    return this.formContactUs.get('message').value || '';
  }

  get msgState() {
    return this.formContactUs.get('message');
  }

  getErrorMessage() {
    if (this.emailState.hasError('required')) {
      return 'Введите email или телефон';
    }
    return this.emailState.hasError('email') ? 'Не правильный email' : '';
  }

  onSubmit() {
    this.isRegisterAfter = this.formContactUs.value.isRegisterAfter;
    this.contactUs.sendMessage(this.formContactUs.value)
      .subscribe(() => {
        if (this.isRegisterAfter) {
          const forQueryParams = this.formContactUs.value;
          delete forQueryParams.message;
          delete forQueryParams.isRegisterAfter;
          this.router.navigate(['/form', 'registration'], { queryParams: (forQueryParams as UserData)})
        }
        this.resetForm();
      });
  }

  resetForm() {
    this.formGroupDirective.resetForm();
  }

  patchUserData(user: User) {
    console.log('srabotalo');
    if (!!user) {
      const [name, email, phone] = [user.name, user.email, user.phone];
      this.formContactUs.patchValue({name, email, phone})
    } else {
      this.formContactUs.reset();
    }
  }


  ngOnDestroy(): void {
    this.phoneSubscr.unsubscribe();
    this.routerSubscription.unsubscribe();
    this.auhtSubscr.unsubscribe();
  }

  private _initform() {
    this.formContactUs = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      isRegisterAfter: new FormControl(false),
    });
  }
}
