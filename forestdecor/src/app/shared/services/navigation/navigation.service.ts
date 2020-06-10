import { Injectable } from '@angular/core';
import { NavigationLink } from '../../models/navigationLink';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _navigationLinks: NavigationLink[] = [
    { name: 'Каталог', routerLink: '/catalog'},
    { name: 'Доставка', routerLink: '/delivery'},
    { name: 'Оплата', routerLink: '/payment'},
    { name: 'Контакты', routerLink: '/contacts'},
    { name: 'Сообщения', routerLink: '/messages'},
    { name: 'Форма', routerLink: '/form'}, // log links
    { name: 'Регистрация', routerLink: '/form/registration'},
    { name: 'Авторизация', routerLink: '/form/authorization'},
    { name: 'Восстановление пароля', routerLink: '/form/authorization/recovery'},
    { name: 'дом', routerLink: '/home'},
    { name: 'Главная', routerLink: '/'},
    { name: 'Указанная страница не найдена', routerLink: '/404'},
  ];

  private _collapseBurger: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() { }

  get collapseBurger() {
    return this._collapseBurger.asObservable();
  }

  setCollapseBurger(state: boolean) {
    this._collapseBurger.next(state);
  }

  getNavigationLinks(all = false): NavigationLink[] {
    return all ? this.allLinks.slice(0,5) : this.allLinks.slice(0,4);
  }

  get allLinks(): NavigationLink[] {
    return [...this._navigationLinks];
  }

  get mainPage(): NavigationLink[] {
    return this.allLinks.filter(item => item.routerLink === '/');
  }

  get logLinks(): NavigationLink[] {
    return this.allLinks.slice(6,9);
  }

  get recovery(): NavigationLink {
    return this.allLinks.filter(item => item.routerLink === '/form/authorization/recovery')[0];
  }
}
