import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonGoTopComponent } from './button-go-top.component';

describe('ButtonGoTopComponent', () => {
  let component: ButtonGoTopComponent;
  let fixture: ComponentFixture<ButtonGoTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonGoTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonGoTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
