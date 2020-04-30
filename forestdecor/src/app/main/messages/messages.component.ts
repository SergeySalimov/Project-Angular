import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
