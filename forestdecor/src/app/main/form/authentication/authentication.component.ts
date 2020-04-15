import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('recovery') recovery: ElementRef;
  isRecovery: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClickRecovery() {
    // this.isRecovery = e.toElement.checked;
    this.isRecovery = this.recovery.nativeElement.checked;
  }

}
