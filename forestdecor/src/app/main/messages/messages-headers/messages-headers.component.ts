import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messages-headers',
  templateUrl: './messages-headers.component.html',
  styleUrls: ['./messages-headers.component.scss']
})
export class MessagesHeadersComponent implements OnInit {

  // curCategories: string = 'Новые';
  // categories: string[] = ['Все', 'Новые', 'Прочитанные', 'Удаленные'];

  messageNavigation = new FormGroup({
    categorie: new FormControl('new'),
    selectAll: new FormControl(),
  });


  constructor() { }

  ngOnInit(): void {
  }

}
