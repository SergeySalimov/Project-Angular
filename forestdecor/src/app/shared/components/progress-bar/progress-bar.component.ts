import { Component, Input, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo/photo.service';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="upload-progress" *ngIf="(uploadProgress$ | async) > 0">
      <span class="h6">PROGRESS<i class="icon-thumbs-up" *ngIf="(uploadProgress$ | async) === 100"></i></span>      
      <mat-progress-bar mode="determinate" [value]="(uploadProgress$ | async)"></mat-progress-bar>
    </div>
  `,
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
 constructor(private photo: PhotoService) { }
 uploadProgress$ = this.photo.uploadProgress;
}
