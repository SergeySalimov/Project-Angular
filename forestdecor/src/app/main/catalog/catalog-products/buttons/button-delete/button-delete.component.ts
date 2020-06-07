import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../../shared/services/auth/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../../../../shared/services/auth/user';
import { Product } from '../../../../../shared/models/product.model';

@Component({
  selector: 'app-button-delete',
  template: `
   <button mat-button
                  *ngIf="(user$ | async)?.isAdmin"
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
