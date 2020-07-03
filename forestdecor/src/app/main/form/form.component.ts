import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { forRecovery } from './animation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  animations: [forRecovery],
})
export class FormComponent implements OnInit{
  triggerState = 'start';
  routerSubscription: Subscription;
  constructor( private router: Router ) { }

  ngOnInit(): void {
    this.routerSubscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => (event as NavigationEnd).urlAfterRedirects),
      map(strUrl => strUrl.split('?')[0]),
      map(strUrl => strUrl.split('#')[0]),
      map(strUrl => strUrl.split('/')),
      distinctUntilChanged(),
    ).subscribe(strArr => {
      if (strArr[2] === 'authorization') {
        this.triggerState = strArr.length === 3 ? 'notRecovery' : 'recovery'
      } else {
        this.triggerState = 'registration';
      }
    });
  }

  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
