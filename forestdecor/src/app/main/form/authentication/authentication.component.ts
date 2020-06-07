import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService, ConsoleService } from '../../../shared';

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
    private console: ConsoleService,
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
    const isRecovery = this.isRecovery;
    const $authObs = isRecovery ? this.auth.recovery(email) : this.auth.authentication(email, form.value.authPsw);
    $authObs.subscribe((response) => {
        this.authForm.resetForm();
      },
      () => this.authForm.controls['authPsw'].reset(),
      () => {
      if (isRecovery) this.console.showInfoMessage({
          title: 'Проверьте Вашу почту',
          message: 'Вам на почту было выслано письмо с ссылкой для изменения пароля',
          style: 'success'
        }, 10000)}
    );
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe()
  }

  // mergeMap((data: AuthResponse) => forkJoin([of(data), this.auth.getAdminsFromServer()])),

}
