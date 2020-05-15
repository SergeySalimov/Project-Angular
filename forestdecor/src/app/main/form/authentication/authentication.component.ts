import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  @ViewChild('recovery', {static: true}) recovery: ElementRef;
  @ViewChild('authForm', {static: true}) authForm: NgForm;

  isRecovery: boolean;
  subscription: Subscription;

  constructor( route: ActivatedRoute, private router: Router) {
    const children: ActivatedRouteSnapshot = route.snapshot.firstChild;
    this.isRecovery = (!!children);
  }

  ngOnInit(): void {
    this.recovery.nativeElement.checked = this.isRecovery;

    this.subscription = this.router.events.pipe(
      filter( event => event instanceof NavigationEnd),
      map( event => (event as NavigationEnd).urlAfterRedirects),
      map ( strUrl => strUrl.split('/')),
      map(urlArr => (urlArr.length === 4)),
      distinctUntilChanged(),
    )
      .subscribe( recoveryState => {
        this.isRecovery = recoveryState;
        this.recovery.nativeElement.checked = this.isRecovery;
      })
  }

  onClickRecovery() {
    this.authForm.control.controls.authPsw.reset('');
    this.isRecovery = this.recovery.nativeElement.checked;
    this.isRecovery ? this.router.navigate(['/form', 'authorization', 'recovery']) :
      this.router.navigate(['/form', 'authorization']);
  }

  onAuthSubmit(form: NgForm) {
    console.log(form.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
