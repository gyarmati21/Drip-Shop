import { TestBed } from '@angular/core/testing';

import { UserGuard } from './user-guard.guard';

describe('UserGuardGuard', () => {
  let guard: UserGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
