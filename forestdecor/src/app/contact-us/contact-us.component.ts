import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { formatDate } from '@angular/common';
import { ContactUsMsg } from '../shared/models/contactUsMsg.model';

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

  constructor(private router: Router, private http: HttpClient) {
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
    // console.log(this.formContactUs.value);
    // this.isRegisterAfter = this.formContactUs.value.isRegisterAfter;
    // const date: number = +Date.now();
    // const folder = formatDate(date, 'yyyy-MM-dd', 'en-US');
    // const newMsg: ContactUsMsg = {...this.formContactUs.value, date};
    // delete newMsg.isRegisterAfter;
    // console.log(newMsg);
    // this.http.post(environment.messagesUrl, newMsg)
    //   .subscribe(data => {
    //     console.log(data)
    //     this.resetForm();
    //   });
  }

  get name() {
    return this.formContactUs.get('name').value || '';
  }

  get email() {
    return this.formContactUs.get('email').value || '';
  }

  get phone() {
    const phone = this.formContactUs.get('phone').value || '';
    if (phone === '(') this.formContactUs.patchValue({phone: ''});
    return phone;
  }
  //

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
    console.log(this.formGroupDirective);
    this.formGroupDirective.resetForm();
    return false;
    // this.formContactUs.patchValue({name: '', email: '', phone: '', message: '', isRegisterAfter: false});
    // this.formContactUs.reset();
  }



}
