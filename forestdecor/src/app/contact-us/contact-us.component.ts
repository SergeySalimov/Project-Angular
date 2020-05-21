import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { ContactUsService } from '../shared/services/contact-us/contact-us.service';
import { UserData } from '../shared/models/userData';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  curRoute: string;
  formContactUs: FormGroup;
  isRegisterAfter: boolean;

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;

  constructor(private router: Router, private contactUs: ContactUsService) {
  }
//
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

  get name() {
    return this.formContactUs.get('name').value || '';
  }

  get nameState() {
    return this.formContactUs.get('name');
  }

  get email() {
    return this.formContactUs.get('email').value || '';
  }

  get phone() {
    const phone = this.formContactUs.get('phone').value || '';
    if (phone === '(') this.formContactUs.patchValue({phone: ''});
    return phone;
  }

  get message() {
    return this.formContactUs.get('message').value || '';
  }

  get msgState() {
    return this.formContactUs.get('message');
  }

  getErrorMessage() {
    if (this.formContactUs.get('email').hasError('required')) {
      return 'Введите email или телефон';
    }
    return this.formContactUs.get('email').hasError('email') ? 'Не правильный email' : '';
  }

  private _initform() {
    this.formContactUs = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', Validators.email),
      phone: new FormControl(''),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
      isRegisterAfter: new FormControl(false),
    });
    // this.formContactUs.patchValue({name: 'Sergey'});
    // this.formContactUs.controls['name'].disable()
  }

  resetForm() {
    this.formGroupDirective.resetForm();
  }



}
