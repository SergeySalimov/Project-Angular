import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  @ViewChild('registrForm', {static: true}) registrForm: NgForm;

  phoneNumber = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.registrForm);
  }

  onRegistrSubmit(registrForm) {
    console.log(registrForm.value);
  }

  onChangePhone(event): void {
    this.phoneNumber = event;
  }

}
