import { TestBed } from '@angular/core/testing';

import { FortiLogServiceService } from './forti-log-service.service';

describe('FortiLogServiceService', () => {
  let service: FortiLogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FortiLogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
