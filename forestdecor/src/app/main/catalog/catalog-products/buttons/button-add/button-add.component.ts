import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService, PhotoService, Product, User } from '../../../../../shared';

@Component({
  selector: 'app-button-add',
  template: `
    <span class="mat-button button-add">
      <label class="label" for="fileAdd">
        <span class="mx-3"><i class="icon-camera mr-1"></i>Добавить</span>
        <input type="file"
               id="fileAdd"
               (change)="onAddPhoto($event, product);">
      </label>
    </span>
  `,
  styleUrls: ['./button-add.component.scss']
})
export class ButtonAddComponent {

  @Input() product: Product;
  user$: Observable<User> = this.auth.user;

  constructor(private auth: AuthService, private photo: PhotoService) {
  }

  onAddPhoto(event, product: Product) {
    console.log(product);
    if (!!event.target.files[0]) {
      this.photo.uploadFile(event.target.files[0], product.urlName);
    }
  }

}
