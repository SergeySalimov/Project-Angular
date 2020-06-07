import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../../../shared/services/auth/user';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-button-add',
  template: `
    <button mat-button
            *ngIf="(user$ | async)?.isAdmin"
            (click)="$event.stopPropagation()"
            class="mx-auto"
            color="primary">
      <span><i class="icon-camera mr-1"></i>Добавить</span>
    </button>
  `,
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent implements OnInit {

  @Input() product: Product;
  user$: Observable<User> = this.auth.user;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
