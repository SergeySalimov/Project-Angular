import { Component, OnDestroy, OnInit } from '@angular/core';
import { Message } from '../../../shared/models/message.model';
import { Categorie } from '../../../shared/models/categories-of-messages';
import { MsgsService } from '../../../shared/services/messages/msgs.service';
import { SpinnerService } from '../../../shared/services/spinners/spinner.service';
import { ConsoleService } from '../../../shared/services/console/console.service';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-messages-accordeon',
  templateUrl: './messages-accordeon.component.html',
  styleUrls: ['./messages-accordeon.component.scss']
})
export class MessagesAccordeonComponent implements OnInit, OnDestroy {

  msgIcon = ['mail', 'drafts', 'local_grocery_store'];//cancel, remove_circle, local_grocery_store
  messages: Message[];
  curState: Categorie = environment.START_CATEGORIE;
  stateSubscr: Subscription;
  chAllSubscr: Subscription;
  step: number;

  constructor(private msgsService: MsgsService, private spinner: SpinnerService, private console: ConsoleService) {
  }

  ngOnInit(): void {
    this.stateSubscr = this.msgsService.categorie.pipe(
      tap((categorie: Categorie) => this.curState = categorie),
      switchMap(categorie => this.msgsService.messages),
    )
      .subscribe((messages: Message[]) => {
      this.messages = [...messages.filter(msg => msg.categorie === this.curState)];
      this.step = null;
    });
    this.chAllSubscr = this.msgsService.selectAll.subscribe(state => this.messages.forEach(msg => msg.isChecked = state));
  }

  openMessageInAccordeon(message: Message, index) {
    if (message.categorie === Categorie.new) {
      this.messages[index].categorie = Categorie.readed;
      this.msgsService.updateMessage(message.id, message).subscribe();
    }
    this.step = index;
  }

  onDeleteClick(message: Message, index) {
    this.messages[index].categorie = Categorie.deleted;
    this.msgsService.updateMessage(message.id, message).subscribe();
    this.nextStep();
  }

  onRecoveryClick(message: Message, index) {
    this.messages[index].categorie = Categorie.readed;
    this.msgsService.updateMessage(message.id, message).subscribe();
    this.nextStep();
  }

  onCheckMessageCheckbox(index, event) {
    this.messages[index].isChecked = event.toElement.checked;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnDestroy(): void {
    this.msgsService.setCategorie(Categorie.new);
    this.stateSubscr.unsubscribe();
    this.chAllSubscr.unsubscribe();
  }

}
