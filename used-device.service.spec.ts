import { TestBed } from '@angular/core/testing';

import { UsedDeviceService } from './used-device.service';

describe('UsedDeviceService', () => {
  let service: UsedDeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsedDeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
