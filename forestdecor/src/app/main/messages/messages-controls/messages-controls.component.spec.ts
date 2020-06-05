import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesControlsComponent } from './messages-controls.component';

describe('MessagesHeadersComponent', () => {
  let component: MessagesControlsComponent;
  let fixture: ComponentFixture<MessagesControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
