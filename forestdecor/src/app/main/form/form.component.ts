import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  isRegistration = false;

  constructor( private router: Router) {
  }

  //ToDo need to check it out
  ngOnInit(): void {
    this.router.events.pipe(
      filter( event => event instanceof NavigationStart),
      tap(e => console.dir(e)),
      map( event => (event as NavigationEnd).url),
      map ( strUrl => strUrl.split('/')),
      map (urlArr => urlArr[1]),
      distinctUntilChanged(),
    ).subscribe(str => {
      // console.log(str);
    })
  }

  onFormChange(reg) {
    this.isRegistration = reg;
  }

}
