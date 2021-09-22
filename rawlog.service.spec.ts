import { TestBed } from '@angular/core/testing';

import { RawlogService } from './rawlog.service';

describe('RawlogService', () => {
  let service: RawlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RawlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
