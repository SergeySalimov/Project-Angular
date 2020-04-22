import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogSingleProductComponent } from './catalog-single-product.component';

describe('CatalogSingleProductComponent', () => {
  let component: CatalogSingleProductComponent;
  let fixture: ComponentFixture<CatalogSingleProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogSingleProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
