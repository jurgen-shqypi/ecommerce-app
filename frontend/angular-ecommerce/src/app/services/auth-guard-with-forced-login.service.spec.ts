import { TestBed } from '@angular/core/testing';

import { AuthGuardWithForcedLoginService } from './auth-guard-with-forced-login.service';

describe('AuthGuardWithForcedLoginService', () => {
  let service: AuthGuardWithForcedLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardWithForcedLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
