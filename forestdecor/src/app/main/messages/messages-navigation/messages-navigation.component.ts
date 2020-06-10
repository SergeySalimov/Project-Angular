import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { Categorie, MsgsService, NavigationService, SpinnerService } from '../../../shared';

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
  collapseBurger$ = this.navigation.collapseBurger;

  @ViewChild('selectAll') checkbox: ElementRef;
  messagNavSubscr: Subscription;
  selectAllSubscr: Subscription;

  constructor(private msgsService: MsgsService, private spinner: SpinnerService, private navigation: NavigationService) {
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
