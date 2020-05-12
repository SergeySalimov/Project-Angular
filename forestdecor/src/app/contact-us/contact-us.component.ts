import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  phoneNumber = '';
  curRoute: string;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) {  }

  ngOnInit(): void {
   this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).urlAfterRedirects),
      distinctUntilChanged(),
      map ( strUrl => strUrl.split('/')[1]),
    )
      .subscribe((route: string) => {
        this.curRoute = route;
      })
  }

  onChangePhone(event): void {
    this.phoneNumber = event;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

}
