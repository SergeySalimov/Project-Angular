import { Injectable } from '@angular/core';
import { NavigationLink } from '../../models/navigationLink';

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
    { name: 'Форма', routerLink: '/form'},
    { name: 'Регистрация', routerLink: '/form/registration'},
    { name: 'Авторизация', routerLink: '/form/authorization'},
    { name: 'Восстановление пароля', routerLink: '/form/authorization/recovery'},
    { name: 'Главная', routerLink: '/'},
    { name: 'Указанная страница не найдена', routerLink: '/404'},
  ];

  constructor() { }

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
