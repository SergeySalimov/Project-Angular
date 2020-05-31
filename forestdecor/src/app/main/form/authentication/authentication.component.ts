import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { UserData } from '../../../shared/models/userData';
import { AuthResponse } from '../../../shared/services/auth/auth-response';
import { SpinnerService } from '../../../shared/components/spinner/spinner.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit, OnDestroy {

  @ViewChild('recovery', {static: true}) recovery: ElementRef;
  @ViewChild('authForm', {static: true}) authForm: NgForm;

  isRecovery: boolean;
  routerSubscription: Subscription;

  constructor(
    private Activatedroute: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private spinner: SpinnerService,
  ) {
    const children: ActivatedRouteSnapshot = Activatedroute.snapshot.firstChild;
    this.isRecovery = (!!children);
  }

  ngOnInit(): void {
    this.recovery.nativeElement.checked = this.isRecovery;

    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects),
      map(strUrl => strUrl.split('/')),
      map(urlArr => (urlArr.length === 4)),
      distinctUntilChanged(),
    )
      .subscribe(recoveryState => {
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
    const email = form.value.authEmail;
    const $authObs = this.isRecovery ? this.auth.recovery(email) : this.auth.authentication(email, form.value.authPsw);
    $authObs.subscribe( (response: AuthResponse) => {
      console.log(response);
      this.router.navigate(['']);
      this.authForm.resetForm();
    });
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe()
  }

}
