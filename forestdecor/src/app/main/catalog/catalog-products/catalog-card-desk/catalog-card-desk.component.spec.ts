import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogCardDeskComponent } from './catalog-card-desk.component';

describe('CatalogCardDeskComponent', () => {
  let component: CatalogCardDeskComponent;
  let fixture: ComponentFixture<CatalogCardDeskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogCardDeskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogCardDeskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
