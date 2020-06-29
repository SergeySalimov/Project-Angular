import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarForPageScrollComponent } from './progress-bar-for-page-scroll.component';

describe('ProgressBarForPageScrollComponent', () => {
  let component: ProgressBarForPageScrollComponent;
  let fixture: ComponentFixture<ProgressBarForPageScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarForPageScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarForPageScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
