import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { UserData } from '../shared/models/userData';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/services/auth/auth.service';
import { User } from '../shared/services/auth/user';
import { ConsoleService } from '../shared/services/console/console.service';
import { MsgsService } from '../shared/services/messages/msgs.service';
import { Categorie } from '../shared/models/categories-of-messages';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit, OnDestroy {

  formContactUs: FormGroup;
  user: User;
  curRoute: string;
  isRegisterAfter: boolean;
  phoneSubscr: Subscription;
  routerSubscr: Subscription;
  auhtSubscr: Subscription;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private router: Router,
              private contactUs: MsgsService,
              private console: ConsoleService,
              private auth: AuthService) {
  }

  ngOnInit(): void {
    this._initform();

    this.phoneSubscr = this.formContactUs.controls['phone'].valueChanges.pipe(map(ph => ph === '(' ? '' : ph))
      .subscribe(phone => {
          phone === '' ? this.emailState.setValidators([Validators.required, Validators.email]) :
            this.emailState.setValidators([Validators.email]);
          this.emailState.updateValueAndValidity();
        });

    this.routerSubscr = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects),
      distinctUntilChanged(),
      map(strUrl => strUrl.split('/')[1]))
      .subscribe((route: string) => this.curRoute = route);

    this.auhtSubscr = this.auth.user.pipe( tap(user => this.user = user))
      .subscribe((user: User) => ((!!user && !this.user.isAdmin) || !user) ? this.patchUserData() : null);
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
    this.contactUs.sendMessageToServer(this.formContactUs.value, Categorie.new).pipe(
      tap(() => this.console.showInfoMessage(
        {
          title: 'Ваше сообщение было отправлено',
          message: 'Ваше сообщение было отправлено',
          style: 'success'}, 5000)
      )
    )
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
    if (this.user) this.patchUserData();
  }

  patchUserData() {
    !!this.user ? this.formContactUs.patchValue({name: this.user.name, email: this.user.email, phone: this.user.phone}) :
      this.formContactUs.reset();
  }

  ngOnDestroy(): void {
    this.phoneSubscr.unsubscribe();
    this.routerSubscr.unsubscribe();
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
