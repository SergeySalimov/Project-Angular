import { Component, OnInit } from '@angular/core';
import { ConsoleService } from './console.service';
import { CustomConsole } from './customConsole';
import { fade } from '../../animations/fade.animation';

@Component({
  selector: 'app-errors',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss'],
  animations: [fade],
})
export class ConsoleComponent implements OnInit {

  console: CustomConsole = null;

  constructor( private errorsService: ConsoleService) { }

  ngOnInit(): void {
    this.errorsService.console.subscribe((console1: CustomConsole) => {
        this.console = console1;
      }
    );
  }

  hide() {
    this.errorsService.hideConsole();
  }

}
