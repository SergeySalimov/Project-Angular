import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesNavigationComponent } from './messages-navigation.component';

describe('MessagesNavigationComponent', () => {
  let component: MessagesNavigationComponent;
  let fixture: ComponentFixture<MessagesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
