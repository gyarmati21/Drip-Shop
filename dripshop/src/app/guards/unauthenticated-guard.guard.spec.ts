import { TestBed } from '@angular/core/testing';

import { UnauthenticatedGuardGuard } from './unauthenticated-guard.guard';

describe('UnauthenticatedGuardGuard', () => {
  let guard: UnauthenticatedGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnauthenticatedGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
