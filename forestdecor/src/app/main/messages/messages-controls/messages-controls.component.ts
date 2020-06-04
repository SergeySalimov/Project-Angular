import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messages-controls',
  templateUrl: './messages-controls.component.html',
  styleUrls: ['./messages-controls.component.scss']
})
export class MessagesControlsComponent implements OnInit {

  messageNav = new FormGroup({
    categorie: new FormControl('new'),
    selectAll: new FormControl(),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
