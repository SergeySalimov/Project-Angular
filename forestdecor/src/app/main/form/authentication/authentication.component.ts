import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { AuthService } from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  @ViewChild('recovery', {static: true}) recovery: ElementRef;
  // @ViewChild('authForm', {static: true}) authForm: ElementRef;
  isRecovery = false;

  // @HostListener('click', ['$event']) onFormSubmit(event: MouseEvent): void {
  // console.dir((event.target as HTMLElement).innerText);
  // console.log('in');
  // }

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.recovery.nativeElement.checked = this.isRecovery;
  }

  onClickRecovery() {
    // this.isRecovery = event.toElement.checked;
    this.isRecovery = this.recovery.nativeElement.checked;
  }

}
