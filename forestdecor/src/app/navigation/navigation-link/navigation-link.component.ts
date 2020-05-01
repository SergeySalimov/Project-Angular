import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { NavigationService } from '../../shared/services/navigation/navigation.service';
import { NavigationLink } from '../../shared/models/navigationLink';

@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.scss']
})
export class NavigationLinkComponent implements OnInit {

  @Output() needToCollapse: EventEmitter<void> = new EventEmitter<void>();

  private navigationLinks: NavigationLink[];

  constructor( private navigationService: NavigationService ) { }

  ngOnInit(): void {
    this.navigationLinks = this.navigationService.navigationLinks;
    this.navigationLinks.pop();
  }

}
