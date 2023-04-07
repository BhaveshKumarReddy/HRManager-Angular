import { TestBed } from '@angular/core/testing';

import { IfNotLoggedInGuard } from './if-not-logged-in.guard';

describe('IfNotLoggedInGuard', () => {
  let guard: IfNotLoggedInGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IfNotLoggedInGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
