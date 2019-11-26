import { TestBed } from '@angular/core/testing';

import { CanActivateIceCreamService } from './can-activate-ice-cream.service';

describe('CanActivateIceCreamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateIceCreamService = TestBed.get(CanActivateIceCreamService);
    expect(service).toBeTruthy();
  });
});
