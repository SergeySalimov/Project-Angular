import { Injectable } from '@angular/core';
import { NavigationLink } from '../../models/navigationLink';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _navigationLinks: NavigationLink[] = [
    { name: 'Каталог', routerLink: '/catalog', categorie: 'common'},
    { name: 'Доставка', routerLink: '/delivery', categorie: 'common'},
    // { name: 'Оплата', routerLink: '/payment', categorie: 'common'},
    { name: 'Контакты', routerLink: '/contacts', categorie: 'common'},
    { name: 'Сообщения', routerLink: '/messages', categorie: 'admin'},
    { name: 'Форма', routerLink: '/form', categorie: 'form'}, // log links
    { name: 'Регистрация', routerLink: '/form/registration', categorie: 'form'},
    { name: 'Авторизация', routerLink: '/form/authorization', categorie: 'form'},
    { name: 'Восстановление пароля', routerLink: '/form/authorization/recovery', categorie: 'form'},
    // { name: 'дом', routerLink: '/home', categorie: 'main'},
    { name: 'Главная', routerLink: '/', categorie: 'main'},
    { name: 'Указанная страница не найдена', routerLink: '/404', categorie: '404'},
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
    return all ? this.allLinks.filter(item => item.categorie === 'common' || item.categorie === 'admin')
      : this.allLinks.filter(item => item.categorie === 'common');
  }

  get allLinks(): NavigationLink[] {
    return [...this._navigationLinks];
  }

  get mainPage(): NavigationLink[] {
    return this.allLinks.filter(item => item.routerLink === '/');
  }

  get logLinks(): NavigationLink[] {
    return this.allLinks.filter(item => item.categorie === 'form');
  }

  get recovery(): NavigationLink {
    return this.allLinks.filter(item => item.routerLink === '/form/authorization/recovery')[0];
  }
}
