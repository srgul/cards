import { TestBed } from '@angular/core/testing';

import { EsxiParseLogServiceService } from './esxi-parse-log-service.service';

describe('EsxiParseLogServiceService', () => {
  let service: EsxiParseLogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsxiParseLogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
