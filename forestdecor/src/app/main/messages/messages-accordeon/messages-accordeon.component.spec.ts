import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesAccordeonComponent } from './messages-accordeon.component';

describe('MessagesAccordeonComponent', () => {
  let component: MessagesAccordeonComponent;
  let fixture: ComponentFixture<MessagesAccordeonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesAccordeonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesAccordeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
