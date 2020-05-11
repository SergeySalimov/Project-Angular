import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  phoneNumber = '';

  constructor() { }

  ngOnInit(): void {
  }

  onChangePhone(event): void {
    this.phoneNumber = event;
  }

}
