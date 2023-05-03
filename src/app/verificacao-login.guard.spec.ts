import { TestBed } from '@angular/core/testing';

import { VerificacaoLoginGuard } from './verificacao-login.guard';

describe('VerificacaoLoginGuard', () => {
  let guard: VerificacaoLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(VerificacaoLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
