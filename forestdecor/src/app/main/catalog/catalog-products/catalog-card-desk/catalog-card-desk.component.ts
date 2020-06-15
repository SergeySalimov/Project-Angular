import { Component, Input } from '@angular/core';
import { AuthService, OldProduct, User } from '../../../../shared';
import { CatalogNavigationService } from '../../catalog-service/catalog-navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-catalog-card-desk',
  templateUrl: './catalog-card-desk.component.html',
  styleUrls: ['./catalog-card-desk.component.scss']
})
export class CatalogCardDeskComponent {
  @Input() curProductData : OldProduct[];
  user$: Observable<User> = this.auth.user;
  constructor(public catalogNavigation: CatalogNavigationService,
              private auth: AuthService) { }
}
