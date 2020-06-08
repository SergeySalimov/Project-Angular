import { Component } from '@angular/core';
import { AuthService, User } from '../../../../../shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-button-edit',
  template: `
   <button mat-button
           *ngIf="(user$ | async)?.isAdmin"
           color="accent"
           class="mx-auto">
            <span><i class="icon-camera mr-1"></i>Редактировать</span>
          </button>
  `,
  styleUrls: ['./button-edit.component.scss']
})
export class ButtonEditComponent{
  user$: Observable<User> = this.auth.user;
  constructor(private auth: AuthService) { }
}
