import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="upload-progress" *ngIf="(uploadProgress$ | async) > 0">
      <span class="h6 ml-3">PROGRESS</span>
      <mat-progress-bar mode="determinate" [value]="(uploadProgress$ | async)"></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
 constructor(private photo: PhotoService) { }
 uploadProgress$ = this.photo.uploadProgress;
}
