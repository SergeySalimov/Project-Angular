import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Message } from '../../../shared/models/message.model';
import { Categorie } from '../../../shared/models/categories-of-messages';
import { MsgsService } from '../../../shared/services/messages/msgs.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-accordeon',
  templateUrl: './messages-accordeon.component.html',
  styleUrls: ['./messages-accordeon.component.scss']
})
export class MessagesAccordeonComponent implements OnInit {

  msgIcon = ['mail', 'drafts', 'local_grocery_store'];//cancel, remove_circle, local_grocery_store
  messages: Message[];
  mesgsServiceSubscription: Subscription;
  isFix: boolean;
  step: number;

  constructor(private msgsService: MsgsService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.mesgsServiceSubscription = this.msgsService.messages.subscribe((messages: Message[]) => this.messages = messages);
  }

  getMessageById(id): Message {
    return this.messages.filter(msg => msg.id === id)[0];
  }

  onCheckMessageCheckbox(event, value) {
    console.log(value);
    console.log(event.toElement.checked);

  }

  setStep(index: number, id: string) {
    const newMessage: Message = this.getMessageById(id);
    if (newMessage.categorie === Categorie.new) {
      newMessage.categorie = Categorie.readed;
      this.msgsService.serverWork.next(true);
      this.msgsService.sendChangesToServer(id, newMessage, Categorie.new, Categorie.readed)
        .subscribe(() => this.msgsService.serverWork.next(false));
    }
    this.step = index;
  }

  deleteMessage(id: string) {
    const delMessage: Message = this.getMessageById(id);
    delMessage.categorie = Categorie.deleted;
    this.msgsService.serverWork.next(true);
    this.msgsService.sendChangesToServer(id, delMessage, Categorie.readed, Categorie.deleted)
      .subscribe(() => this.msgsService.serverWork.next(false));
    this.nextStep();
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
