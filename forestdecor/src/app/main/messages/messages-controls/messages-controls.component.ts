import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MsgsService } from '../../../shared/services/messages/msgs.service';

@Component({
  selector: 'app-messages-controls',
  templateUrl: './messages-controls.component.html',
  styleUrls: ['./messages-controls.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesControlsComponent {

  messageNav = new FormGroup({
    categorie: new FormControl('new'),
    selectAll: new FormControl(false),
  });
  serverWork$= this.msgsService.serverWork;

  constructor(private msgsService: MsgsService) { }
  // this.cdr.detectChanges();
  //  ngOnInit(): void {
  // }

  deleteAll() {
    console.log('deleteAll');
  }




}
