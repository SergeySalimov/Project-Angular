import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MsgsService } from '../../../shared/services/messages/msgs.service';
import { SpinnerService } from '../../../shared/services/spinners/spinner.service';
import { Categorie } from '../../../shared/models/categories-of-messages';
import { environment } from '../../../../environments/environment';
import { map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-navigation',
  templateUrl: './messages-navigation.component.html',
  styleUrls: ['./messages-navigation.component.scss']
})
export class MessagesNavigationComponent implements OnInit, OnDestroy, AfterViewInit {

  messageNav = new FormGroup({
    categorie: new FormControl(Categorie[environment.START_CATEGORIE]),
  });
  serverWork$ = this.spinner.msgsSpiner;
  @ViewChild('selectAll') checkbox: ElementRef;
  messagNavSubscr: Subscription;
  selectAllSubscr: Subscription;

  constructor(private msgsService: MsgsService, private spinner: SpinnerService) {
  }

  ngOnInit(): void {
    this.messagNavSubscr = this.messageNav.valueChanges.pipe(
      map(formObj => formObj.categorie),
      map((categStr: string) => MsgsService.getStringReturnEnumCategorie(categStr)),
    )
      .subscribe((categorie: Categorie) => {
        this.msgsService.setCategorie(categorie);
        this.checkbox.nativeElement.checked = false;
      });
  }

  ngAfterViewInit(): void {
    this.selectAllSubscr = this.msgsService.selectAll.subscribe(state => this.checkbox.nativeElement.checked = state);
  }

  loadFromServer() {
    this.msgsService.loadNewMessages();
  }

  selectAllMessages(event) {
    this.msgsService.setSelectAll(event.toElement.checked);
  }

  recoveryAllChecked() {
    this.msgsService.changeAllCheckedMessage(false);
  }

  deleteAllChecked() {
    this.msgsService.changeAllCheckedMessage();
  }

  ngOnDestroy(): void {
    this.messagNavSubscr.unsubscribe();
    this.selectAllSubscr.unsubscribe();
  }

}
