import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Message } from '../../../shared/models/message.model';
import { Categorie } from '../../../shared/models/categories-of-messages';
import { MsgsService } from '../../../shared/services/messages/msgs.service';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-messages-accordeon',
  templateUrl: './messages-accordeon.component.html',
  styleUrls: ['./messages-accordeon.component.scss']
})
export class MessagesAccordeonComponent implements OnInit, OnDestroy {

  messageNav = new FormGroup({
    categorie: new FormControl('new'),
  });
  serverWork = false;
  @ViewChild('selectAll') checkbox: ElementRef;

  msgIcon = ['mail', 'drafts', 'local_grocery_store'];//cancel, remove_circle, local_grocery_store
  messages: Message[];
  mesgsSubscr: Subscription;
  step: number;

  constructor(private msgsService: MsgsService) {
  }

  ngOnInit(): void {
    this.mesgsSubscr = this.msgsService.messages.subscribe((messages: Message[]) => this.messages = messages);
    this.messageNav.valueChanges.subscribe((data) => {
      this.step = null;
      this.checkbox.nativeElement.checked = false;
      this.getMessageByCategorie(this.getStringReturnEnumCategorie(data.categorie));
    })
  }

  selectAllMessages(event) {
    console.log(event.toElement.checked);
    this.messages.forEach(msg => msg.isChecked = event.toElement.checked);
  }

  getMessageById(id: string): Message {
    return this.messages.filter(msg => msg.id === id)[0];
  }

  getMessageByCategorie(categorie: Categorie) {
    this.serverWork = true;
    this.msgsService.getMessagesFromServer(categorie).subscribe((msg: Message[]) => {
      this.messages = msg;
      this.serverWork = false;
    });
  }

  getStringReturnEnumCategorie(data: string): Categorie {
    let categorie: Categorie;
    switch (data) {
      case 'all':
        categorie = Categorie.all;
        break;
      case 'new':
        categorie = Categorie.new;
        break;
      case 'readed':
        categorie = Categorie.readed;
        break;
      case 'deleted':
        categorie = Categorie.deleted;
        break;
      default:
        categorie = Categorie.new;
    }
    return categorie;
  }

  onCheckMessageCheckbox(event, id) {
    this.messages.some(msg => {
      if (msg.id === id) {
        msg.isChecked = event.toElement.checked;
      }
    });
  }

  setStep(index: number, id: string) {
    const newMessage: Message = this.getMessageById(id);
    if (newMessage.categorie === Categorie.new) {
      newMessage.categorie = Categorie.readed;
      this.serverWork = true;
      this.msgsService.sendChangesToServer(id, newMessage, Categorie.new, Categorie.readed)
        .subscribe(() => this.serverWork = false);
    }
    this.step = index;
  }

  deleteMessage(id: string) {
    const delMessage: Message = this.getMessageById(id);
    delMessage.categorie = Categorie.deleted;
    this.serverWork = true;
    this.msgsService.sendChangesToServer(id, delMessage, Categorie.readed, Categorie.deleted)
      .subscribe(() => this.serverWork = false);
    this.nextStep();
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  deleteAllChecked() {
    this.messages.forEach(msg => {
      if (msg.isChecked) this.deleteMessage(msg.id);
    });
    this.getMessageByCategorie(this.messageNav.controls['categorie'].value);

  }

  ngOnDestroy(): void {
    this.mesgsSubscr.unsubscribe();
  }

}
