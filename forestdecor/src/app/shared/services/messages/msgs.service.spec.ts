import { TestBed } from '@angular/core/testing';

import { MsgsService } from './msgs.service';

describe('MsgsService', () => {
  let service: MsgsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
