import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormToogleButtonsComponent } from './form-toogle-buttons.component';

describe('FormToogleButtonsComponent', () => {
  let component: FormToogleButtonsComponent;
  let fixture: ComponentFixture<FormToogleButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormToogleButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormToogleButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
