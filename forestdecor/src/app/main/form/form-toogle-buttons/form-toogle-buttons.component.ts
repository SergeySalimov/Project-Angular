import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-toogle-buttons',
  templateUrl: './form-toogle-buttons.component.html',
  styleUrls: ['./form-toogle-buttons.component.scss']
})
export class FormToogleButtonsComponent implements OnInit {

    @Input() isRegistration: boolean;
    @Output() formToogleClick: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  emitClick(reg: boolean) {
        this.formToogleClick.emit(reg);
  }

}
