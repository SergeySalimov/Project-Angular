import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isRecovery: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecovery(e) {
    this.isRecovery = e.toElement.checked;
  }

}
