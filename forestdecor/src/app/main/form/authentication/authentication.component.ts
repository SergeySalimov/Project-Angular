import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('recovery', {static: true}) recovery: ElementRef;
  isRecovery: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.recovery.nativeElement.checked = this.isRecovery;
  }

  onClickRecovery() {
    // this.isRecovery = event.toElement.checked;
    this.isRecovery = this.recovery.nativeElement.checked;
  }

}
