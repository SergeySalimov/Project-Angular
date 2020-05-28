import { TestBed } from '@angular/core/testing';

import { CatalogNavigationService } from './catalog-navigation.service';

describe('CatalogNavigationService', () => {
  let service: CatalogNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
