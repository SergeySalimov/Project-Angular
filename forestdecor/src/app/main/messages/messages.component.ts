import { Component, OnInit } from '@angular/core';
import { Categorie } from '../../shared/models/categories-of-messages';
import { MsgsService } from '../../shared/services/messages/msgs.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



}
