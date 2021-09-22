import { TestBed } from '@angular/core/testing';

import { SupportedDeviceService } from './supported-device.service';

describe('SupportedDeviceService', () => {
  let service: SupportedDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupportedDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
