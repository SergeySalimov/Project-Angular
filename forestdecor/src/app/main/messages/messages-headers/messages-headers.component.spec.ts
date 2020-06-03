import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesHeadersComponent } from './messages-headers.component';

describe('MessagesHeadersComponent', () => {
  let component: MessagesHeadersComponent;
  let fixture: ComponentFixture<MessagesHeadersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesHeadersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesHeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
