import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnChanges, OnInit {

  navigationLinks: string[] = [
    'Каталог',
    'Доставка',
    'Оплата',
    'Контакты'
  ];

  @Input() activeLink;
  @Input() isLogged;
  @Output() navigationClick: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnChanges(): void {
    if (this.isLogged) {
      this.navigationLinks = [
        'Каталог',
        'Сообщения',
        'Доставка',
        'Оплата',
        'Контакты'
      ];
    } else {
      this.navigationLinks = [
        'Каталог',
        'Доставка',
        'Оплата',
        'Контакты'
      ];
    }
  }

  ngOnInit(): void {

  }

  onNavigationClick(elStr) {
    console.log('Emit: ' ,elStr);
    this.navigationClick.emit(elStr);
  }


}
