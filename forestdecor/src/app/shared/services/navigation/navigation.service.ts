import { Injectable } from '@angular/core';
import { NavigationLink } from '../../models/navigationLink';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _navigationLinks: NavigationLink[] = [
    { name: 'Каталог', routerLink: '/catalog'},
    { name: 'Сообщения', routerLink: '/messages'},
    { name: 'Доставка', routerLink: '/delivery'},
    { name: 'Оплата', routerLink: '/payment'},
    { name: 'Контакты', routerLink: '/contacts'},
    { name: 'Регистрация', routerLink: '/form'},
    { name: 'Главная', routerLink: '/'},
    { name: 'Указанная страница не найдена', routerLink: '/404'},
  ];

  constructor() { }

  get navigationLinks(): NavigationLink[] {
    const navLinks: NavigationLink[] = this.allLinks;
    navLinks.splice(5);
    return navLinks;
  }

  get allLinks(): NavigationLink[] {
    return [...this._navigationLinks];
  }

  get mainPage(): NavigationLink[] {
    return this._navigationLinks.filter(item => item.routerLink === '/');
  }
}
