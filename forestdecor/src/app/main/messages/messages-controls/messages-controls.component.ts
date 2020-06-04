import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Categorie } from '../../../shared/models/categories-of-messages';
import { MsgsService } from '../../../shared/services/messages/msgs.service';


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

  constructor(private msgsService: MsgsService) { }

  ngOnInit(): void {
  }

  deleteAll() {
    console.log('deleteAll');
  }

  showMsgs() {
    this.msgsService.getMessagesFromServer(Categorie.new).subscribe(
      (data) => {
        console.log(data);
      }
    )
  }

}
