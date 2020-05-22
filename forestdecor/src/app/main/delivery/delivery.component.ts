import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../shared/services/users/users.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.scss']
})
export class DeliveryComponent implements OnInit {

  constructor(private users: UsersService) { }

  ngOnInit(): void {
  }

  getUsers() {
    // this.users.signInAnonymously()
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }

}
