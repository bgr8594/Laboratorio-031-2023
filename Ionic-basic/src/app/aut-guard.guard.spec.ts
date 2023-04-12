import { TestBed } from '@angular/core/testing';

import { AutGuardGuard } from './service/aut-guard.guard';

describe('AutGuardGuard', () => {
  let guard: AutGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
