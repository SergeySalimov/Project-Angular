import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forestdecor';

  isLogged: boolean = false;
  activeLink: string = 'Каталог';

  onChangeLog(log) {
    this.isLogged = log;
  }

  onNavChange(el) {
    console.log('App: ' ,el);
    this.activeLink = el;
  }

}
