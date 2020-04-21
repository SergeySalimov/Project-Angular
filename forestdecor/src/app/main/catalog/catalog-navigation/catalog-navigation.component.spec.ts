import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogNavigationComponent } from './catalog-navigation.component';

describe('CatalogNavigationComponent', () => {
  let component: CatalogNavigationComponent;
  let fixture: ComponentFixture<CatalogNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
