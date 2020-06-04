import { Component, OnInit } from '@angular/core';
import { Message } from '../../../shared/models/message.model';
import { Categorie } from '../../../shared/models/categories-of-messages';
import { MsgsService } from '../../../shared/services/messages/msgs.service';

@Component({
  selector: 'app-messages-accordeon',
  templateUrl: './messages-accordeon.component.html',
  styleUrls: ['./messages-accordeon.component.scss']
})
export class MessagesAccordeonComponent implements OnInit {

  msgIcon = ['mail', 'drafts', 'remove_circle'];
  checkedMessages: string[] = [];
  messages: Message[];
  step: number;

  constructor(private msgsService: MsgsService) { }

  ngOnInit(): void {
  }

  onCheckMessageCheckbox(event, value) {
    console.log(value);
    console.log(event.toElement.checked);

  }

  showMsgs() {
    this.msgsService.getMessagesFromServer(Categorie.new).subscribe(
      (data) => {
        this.messages = data;
      }
    )
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
