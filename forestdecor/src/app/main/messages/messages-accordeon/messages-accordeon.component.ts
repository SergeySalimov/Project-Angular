import { Component, OnInit } from '@angular/core';
import { ContactUsMsg } from '../../../shared/models/contactUsMsg.model';

enum Categorie {
  new,
  readed,
  deleted
}

@Component({
  selector: 'app-messages-accordeon',
  templateUrl: './messages-accordeon.component.html',
  styleUrls: ['./messages-accordeon.component.scss']
})
export class MessagesAccordeonComponent implements OnInit {

  msgIcon = ['mail', 'drafts', 'remove_circle'];
  newMessages: ContactUsMsg[] = [
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed, phone: '2911111111'},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
    {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed},
  ];
  message: ContactUsMsg = {name: '1212121', email: '1@1', date: +(new Date()), message: 'Beliberda dfdfdfdfd dfdssfdsf dsf dfg ddf gg g dfgdfgdgd', checked: false, categorie: Categorie.readed};
  step: number = 0;

  constructor() { }

  ngOnInit(): void {
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
