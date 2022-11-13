import { TestBed } from '@angular/core/testing';

import { IsNotAuthenticated } from './auth.guard';

describe('AuthGuard', () => {
  let guard: IsNotAuthenticated;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotAuthenticated);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
