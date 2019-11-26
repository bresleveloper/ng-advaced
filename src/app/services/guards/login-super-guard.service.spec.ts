import { TestBed } from '@angular/core/testing';

import { LoginSuperGuardService } from './login-super-guard.service';

describe('LoginSuperGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginSuperGuardService = TestBed.get(LoginSuperGuardService);
    expect(service).toBeTruthy();
  });
});
