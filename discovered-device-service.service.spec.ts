import { TestBed } from '@angular/core/testing';

import { DiscoveredDeviceServiceService } from './discovered-device-service.service';

describe('DiscoveredDeviceServiceService', () => {
  let service: DiscoveredDeviceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscoveredDeviceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
