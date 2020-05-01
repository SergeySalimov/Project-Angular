import { Injectable } from '@angular/core';
import { NavigationLink } from '../../models/navigationLink';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _navigationLinks: NavigationLink[] = [
    { name: 'Каталог', routerLink: '/catalog/all'},
    { name: 'Сообщения', routerLink: '/messages'},
    { name: 'Доставка', routerLink: '/delivery'},
    { name: 'Оплата', routerLink: '/payment'},
    { name: 'Контакты', routerLink: '/contacts'},
    { name: 'Регистрация', routerLink: '/form'},
  ];

  constructor() { }

  get navigationLinks() {
    return [...this._navigationLinks];
  }
}
