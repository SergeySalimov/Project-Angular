import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, Product, User } from '../../../../../shared';

@Component({
  selector: 'app-button-delete',
  template: `
<!--    *ngIf="(user$ | async)?.isAdmin"-->
   <button mat-button
           
           class="mx-auto"
           color="warn">
            <span><i class="icon-camera mr-1"></i>Удалить</span>
          </button>
  `,
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent implements OnInit {

  @Input() product: Product;
  user$: Observable<User> = this.auth.user;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
